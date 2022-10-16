import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { DateSelectType, RetrospectType } from '../../../types/retrospectType';
import RetrospectCard from './RetrospectCard';
import RetrospectWrite from './RetrospectWrite';
import BASEURL from '../../../config';

const Container = styled.div`
    margin-top:19px;
  `;

interface RetrospectListProps {
  retrospectList: RetrospectType[];
  selectedDateType:DateSelectType;
  requestReviewList:()=>void;
}

function RetrospectList({retrospectList, selectedDateType, requestReviewList}:RetrospectListProps) {
  const [retroData, setRetroData] = useState<RetrospectType>();


  const requestReviewStatLast = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzaGVsdG9ud29uQGdtYWlsLmNvbSIsInJvbGVzIjoiVVNFUiJ9.nLeekFmZL1s9QYlVsQQrslSa1ucvvL4Ng_1dT5sRKKA");
      
      const requestOptions: RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      const response = await fetch(`${BASEURL}review/stat/last/${selectedDateType}`, requestOptions).then(res => res.json());
      
      if(response.statusCode === 200){
        setRetroData(response.data)
      }
    } catch (err) {
      console.log("@@@@@@@@@@ REVIEW STAT LAST ERROR @@@@@@@@@@")
      console.log(err);
    }
  }

  useEffect(()=> {
    requestReviewStatLast();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedDateType])

  const checkDateType = (dateValue:string) => {
    if(dateValue === 'week') return '이번주';
    if(dateValue === 'month') return '이번달';
    return '올 해';
  }

  return (
    <Container>
      {retroData && !retroData.id && (
        <RetrospectWrite 
          date={checkDateType(selectedDateType)} 
          selectedDateType={selectedDateType} 
          percentage={retroData.percent} 
          todoCount={retroData.totalCnt} 
          didCount={retroData.doneCnt} 
          requestReviewStatLast={requestReviewStatLast}
          requestReviewList={requestReviewList}
        />
      )}
      {retrospectList && retrospectList.map((data) => {
        const {percent,totalCnt, doneCnt,text, endDate} = data;
        const date = endDate.split("-");
        return (<RetrospectCard date={`${date[0]}.${date[1]}`} percentage={percent} todoCount={totalCnt} didCount={doneCnt} text={text} />)
      })}
    </Container>
  );
}

export default RetrospectList;
