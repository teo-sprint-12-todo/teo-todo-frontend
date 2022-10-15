import React from 'react';
import styled from 'styled-components';
import RetrospectCategory from './components/RetrospectCategory';
import RetrospectDateType from './components/RetrospectDateType';
import RetrospectList from './components/RetrospectList';
import RetrospectTopbar from './components/RetrospectTopbar';

const Container = styled.div`
  margin:0 20.5px;
`;

function Retrospect() {
  return (
    <Container>
      <RetrospectTopbar />
      <RetrospectCategory />
      <RetrospectDateType />
      <RetrospectList />
    </Container>
  );
}

export default Retrospect;
