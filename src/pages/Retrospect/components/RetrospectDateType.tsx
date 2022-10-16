import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width : 100%;
  margin-top:42px;
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

interface RetrospectDateTypeProps {
  selectedDateType:string;
  setSelectedDateType:React.Dispatch<React.SetStateAction<string>>;
}

function RetrospectDateType({ selectedDateType, setSelectedDateType }:RetrospectDateTypeProps) {
  return (
    <Container>
      <Tab name="week" selectedValue={selectedDateType} onClick={() => setSelectedDateType('week')}>주</Tab>
      <Tab name="month" selectedValue={selectedDateType} onClick={() => setSelectedDateType('month')}>월</Tab>
      <Tab name="year" selectedValue={selectedDateType} onClick={() => setSelectedDateType('year')}>년</Tab>
    </Container>
  );
}

export default RetrospectDateType;
