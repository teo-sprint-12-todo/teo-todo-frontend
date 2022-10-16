import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position:relative;
  display:flex;
  align-items:center;
  width: 100%;
  height: 16px;
  margin-top:8px;
  background: #E7E8E9;
  border-radius: 40px;
`

const PercentBar = styled.div`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 47%;
  height: 16px;
  background: #FF9364;
  border-radius: 40px;
`

function GoalsDetailProgressBar() {
  return (
    <Container>
      <PercentBar />
    </Container>
  );
}

export default GoalsDetailProgressBar;