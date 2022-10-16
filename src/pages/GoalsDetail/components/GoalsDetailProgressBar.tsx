import React from 'react';
import styled from 'styled-components';
import { Percent } from '../../../types/dummy';

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

const PercentBar = styled.div<{percent:number}>`
  position: absolute;
  left: 0px;
  top: 0px;
  width: ${((props)=>props.percent)}%;
  height: 16px;
  background: #FF9364;
  border-radius: 40px;
`

function GoalsDetailProgressBar({percent}:Percent) {
  return (
    <Container>
      <PercentBar percent={percent} />
    </Container>
  );
}

export default GoalsDetailProgressBar;