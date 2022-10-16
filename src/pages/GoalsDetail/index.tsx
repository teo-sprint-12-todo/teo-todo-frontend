import React from 'react';
import styled from 'styled-components';
import ArrowLeft from '../../assets/goalsImg/arrowLeft.svg'
import GoalsDetailAchieve from './components/GoalsDetailAchieve';
import GoalsDetailDate from './components/GoalsDetailDate';
import GoalsDetailProgressBar from './components/GoalsDetailProgressBar';
import GoalsDetailTodoListDay from './components/GoalsDetailTodoListDay';
import GoalsDetailWeek from './components/GoalsDetailWeek';

const Container = styled.div`
  margin:28px 20.5px;
`

const BackBtn = styled.img`
  height: 16.2px;
  width: 9.4px;
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
  return (
    <Container>
      <BackBtn src={ArrowLeft} />
      <GoalsDetailDate />
      <Title>목표이름</Title>
      <GoalsDetailAchieve />
      <GoalsDetailProgressBar />
      <GoalsDetailWeek />
      <FilterText>실천 완료만</FilterText>
      <GoalsDetailTodoListDay />
    </Container>
  );
}

export default GoalsDetail;