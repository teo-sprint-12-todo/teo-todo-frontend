import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  align-items:center;
  margin-top:24px;
`

const Dday = styled.div`
  display: flex;
justify-content: center;
align-items: center;
width: 44px;
height: 20px;
background: #FF4A11;
border-radius: 20px;
color:#fff;
font-family: Pretendard;
font-size: 12px;
font-weight: 400;
line-height: 16px;
letter-spacing: -0.01em;
text-align: left;
`

const Date = styled.div`
  margin-left:4px;
  font-family: Pretendard;
  font-size: 11px;
  font-weight: 400;
  line-height: 13px;
  letter-spacing: -0.01em;
  text-align: center;
`

function GoalsDetailDate() {
  return (
    <Container>
      <Dday>
        D-68
      </Dday>
      <Date>
        2022.10.17~2022.12.30
      </Date>
    </Container>
  );
}

export default GoalsDetailDate;