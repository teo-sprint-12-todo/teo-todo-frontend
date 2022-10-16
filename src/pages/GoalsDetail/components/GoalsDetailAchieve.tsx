import React from 'react';
import styled from 'styled-components';
import { Percent } from '../../../types/dummy';

const Container =styled.div`
  display:flex;
  align-items:center;
  margin-top:16px;
`

const AchieveText = styled.div`
  
  color:#FF4A11;
  
  font-size: 15px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: -0.01em;
  text-align: left;
`

const TextContainer = styled.div`
  display:flex;
  align-items:center;
  margin-left:8px;
  
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #8E8E93;
`

const CompleteText = styled.div`
  
  font-style: normal;
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  text-align: center;
  letter-spacing: -0.01em;
  color: #FF9364;
`

function GoalsDetailAchieve({percent}:Percent) {
  return (
    <Container>
      <AchieveText>{percent}% 실천</AchieveText>
      <TextContainer>
        <CompleteText>{percent}</CompleteText>/100
      </TextContainer>
    </Container>
  );
}

export default GoalsDetailAchieve;