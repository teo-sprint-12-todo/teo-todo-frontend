import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import GoalsDetailAchieve from './components/GoalsDetailAchieve';
import GoalsDetailDate from './components/GoalsDetailDate';
import GoalsDetailProgressBar from './components/GoalsDetailProgressBar';
import GoalsDetailTodoListDay from './components/GoalsDetailTodoListDay';
import GoalsDetailWeek from './components/GoalsDetailWeek';

const Container = styled.div`
  margin:28px 20.5px;
`

const Title = styled.div`
  margin-top:8px;
  
  font-size: 15px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
`

const FilterText = styled.div`
  margin-top:20px;
  color:#8E8E93;
  
  font-size: 12px;
  font-weight: 500;
  line-height: 14px;
  letter-spacing: -0.01em;
  text-align:end;
`

function GoalsDetail() {
  const location = useLocation();
  const {id, categoryId, name, startDate, endDate, complete, incomplete, inCom} = location.state.items;
  const comNum = parseInt(complete, 10)
  const incomNum = parseInt(incomplete, 10)
  const percent = Math.floor((comNum/(comNum+incomNum))*100)
  const ddayCnt = (new Date(endDate).getTime()-new Date(startDate).getTime())/(1000*60*60*24)

  return (
    <Container>
      <GoalsDetailDate endDate={endDate} startDate={startDate} ddayCnt={ddayCnt}/>
      <Title>{name}</Title>
      <GoalsDetailAchieve percent={percent}/>
      <GoalsDetailProgressBar percent={percent} />
      <GoalsDetailWeek />
      <FilterText>실천 완료만</FilterText>
      <GoalsDetailTodoListDay />
    </Container>
  );
}

export default GoalsDetail;