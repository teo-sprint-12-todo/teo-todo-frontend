import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import RetrospectDateType from './components/RetrospectDateType';
import RetrospectList from './components/RetrospectList';
import RetrospectTopbar from './components/RetrospectTopbar';
import { DateSelectType, RetrospectType } from '../../types/retrospectType';
import { SAMPLE_AUTH_TOKEN, SERVER_URL } from '../../constants/url';

const Container = styled.div`
  padding : 0 2rem;
  margin-bottom:5rem;
`;

function Retrospect() {
  const [selectedDateType, setSelectedDateType] = useState<DateSelectType>('week');
  const [retrospectList , setRetrospectList] = useState<RetrospectType[]>([]);
  const [myTier, setMyTier] = useState(0);

  const requestReviewList = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", `bearer ${SAMPLE_AUTH_TOKEN}`);
      
      const requestOptions:RequestInit = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
      
      const response = await fetch(`${SERVER_URL}/review/list/${selectedDateType}`, requestOptions).then(res=>res.json())
      if(response.statusCode === 200){
        setRetrospectList(response.data)
      }
      console.log(response);
    } catch (err) {
      console.log("@@@@@@@@@@ GET REVIEW LIST ERROR @@@@@@@@@@")
      console.log(err);
    }
  }

const requestUserMyTier = async () => {
  try {
    const myHeaders = new Headers();
    myHeaders.append("Authorization", `bearer ${SAMPLE_AUTH_TOKEN}`);
    
    const requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };
    
    const response = await fetch(`${SERVER_URL}/user/my/tier`, requestOptions).then(res=> res.json());
    if(response.statusCode === 200){
      setMyTier(response.data);
    }
  } catch (err) {
    console.log('@@@@@@@@@@ GET USER MY TIER ERROR @@@@@@@@@@');
    console.log(err);
  }
}

  useEffect(()=> {
    requestUserMyTier();
  },[])

  useEffect(()=> {
    requestReviewList()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[selectedDateType])

  return (
    <Container>
      <RetrospectTopbar percentage={myTier / 7 * 100} text={'지난 한일을 돌아보며\n생각을 기록해보세요'} myTier={myTier}  />
      <RetrospectDateType
        selectedDateType={selectedDateType}
        setSelectedDateType={setSelectedDateType}
      />
      <RetrospectList retrospectList={retrospectList} selectedDateType={selectedDateType} requestReviewList={requestReviewList} />
    </Container>
  );
}

export default Retrospect;
