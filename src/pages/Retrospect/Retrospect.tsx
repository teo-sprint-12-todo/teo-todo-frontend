import React, { useState } from 'react';
import styled from 'styled-components';
import RetrospectDateType from './components/RetrospectDateType';
import RetrospectList from './components/RetrospectList';
import RetrospectTopbar from './components/RetrospectTopbar';

const Container = styled.div`
  margin:0 20.5px;
`;

function Retrospect() {
  const [selectedDateType, setSelectedDateType] = useState('week');
  return (
    <Container>
      <RetrospectTopbar percentage={60} text={'지난 한일을 돌아보며\n생각을 기록해보세요'} />
      <RetrospectDateType
        selectedDateType={selectedDateType}
        setSelectedDateType={setSelectedDateType}
      />
      <RetrospectList />
    </Container>
  );
}

export default Retrospect;