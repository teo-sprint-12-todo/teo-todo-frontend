import React from 'react';
import styled from 'styled-components';
import GoalsDetailDay from './GoalsDetailDay';

const Container = styled.div`
  margin-top:26px;
`

const Month = styled.div`
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 600;
  line-height: 13px;
  letter-spacing: -0.01em;
`

const WeekContainer = styled.div`
  display:flex;
  justify-content:space-around;
  margin-top:8px;
`



function GoalsDetailWeek() {
  return (
    <Container>
      <Month>
        2022년 10월
      </Month>
      <WeekContainer>
        <GoalsDetailDay dayType={0} day={16} selectedDay={17} />
        <GoalsDetailDay dayType={1} day={17} selectedDay={17} />
        <GoalsDetailDay dayType={2} day={18} selectedDay={17} />
        <GoalsDetailDay dayType={3} day={19} selectedDay={17} />
        <GoalsDetailDay dayType={4} day={20} selectedDay={17} />
        <GoalsDetailDay dayType={5} day={21} selectedDay={17} />
        <GoalsDetailDay dayType={6} day={22} selectedDay={17} />
      </WeekContainer>
    </Container>
  );
}

export default GoalsDetailWeek;