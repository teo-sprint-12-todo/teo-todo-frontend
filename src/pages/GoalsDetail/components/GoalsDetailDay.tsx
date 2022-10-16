import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

const DayOfTheWeek = styled.div`
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: 0.2723584771156311px;
`

const Day = styled.div<{dayType:number; isSelected:boolean;}>`
  display:flex;
  justify-content:center;
  align-items:center;
  width:20px;
  height:20px;
  margin-top:4px;
  border-radius:50%;
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 400;
  line-height: 12px;
  letter-spacing: 0.2723584771156311px;
  
  color:${({dayType})=> {
    if(dayType === 0) return "#A84A35";
    if(dayType === 6) return "#008CAD";
    return "#858585";
  }};
  ${({isSelected})=> isSelected && "background: #50C6EC"};



`

const DAYOFTHEWEEK = ['일', '월', '화', '수', '목', '금', '토']

/**
 * @dayType : 요일 데이터, 0부터 일요일
 */
interface GoalsDetailDayProps {
  dayType:0|1|2|3|4|5|6;
  day:number;
  selectedDay:number;
}

function GoalsDetailDay({dayType,day, selectedDay}: GoalsDetailDayProps) {
  return (
    <Container>
      <DayOfTheWeek>{DAYOFTHEWEEK[dayType]}</DayOfTheWeek>
      <Day dayType={dayType} isSelected={day === selectedDay}>{day}</Day>
    </Container>
  );
}

export default GoalsDetailDay;