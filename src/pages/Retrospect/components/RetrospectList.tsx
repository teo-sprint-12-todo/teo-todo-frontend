import React from 'react';
import styled from 'styled-components';
import RetrospectCard from './RetrospectCard';

const Container = styled.div`
    margin-top:19px;
  `;

function RetrospectList() {
  return (
    <Container>
      <RetrospectCard date="2022.10" />
      <RetrospectCard date="2022.09" percentage={50} todoCount={72} didCount={56} text="기록이 되었습니다" />
      <RetrospectCard date="2022.08" percentage={100} todoCount={42} didCount={26} text="기록이 되었습니다" />
      <RetrospectCard date="2022.07" percentage={90} todoCount={62} didCount={16} text="기록이 되었습니다" />
    </Container>
  );
}

export default RetrospectList;
