import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  align-items:center;
  margin-top:12px;
`;

const Tab = styled.div<{ name:string; selectedValue:string; }>`
  display:flex;
  justify-content:center;
  align-items:center;
  width: 89px;
  height: 26px;
  margin-right:7px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 18px;
  letter-spacing: -0.02em;
  
  ${({ name, selectedValue }) => (name === selectedValue
    ? 'color: #fff; background-color:#3A3A3C;'
    : 'color: #BCBCC0; border:1px solid #BCBCC0;')
}
`;

function RetrospectDateType() {
  const [selectedDateType, setSelectedDateType] = useState('week');

  return (
    <Container>
      <Tab name="week" selectedValue={selectedDateType} onClick={() => setSelectedDateType('week')}>주</Tab>
      <Tab name="month" selectedValue={selectedDateType} onClick={() => setSelectedDateType('month')}>월</Tab>
      <Tab name="year" selectedValue={selectedDateType} onClick={() => setSelectedDateType('year')}>년</Tab>
    </Container>
  );
}

export default RetrospectDateType;