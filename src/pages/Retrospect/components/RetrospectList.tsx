import React, { useState } from 'react';
import styled from 'styled-components';
import RetrospectCard from './RetrospectCard';
import RetrospectWrite from './RetrospectWrite';

const Container = styled.div`
    margin-top:19px;
  `;

function RetrospectList() {
  const [isWriting, setIsWriting] = useState(false);

  return (
    <Container>
      <RetrospectWrite date="2022.10" isWriting={isWriting} setIsWriting={setIsWriting} />
      <RetrospectCard date="2022.09" percentage={50} todoCount={72} didCount={56} text="기록이 되었습니다" />
      <RetrospectCard date="2022.08" percentage={100} todoCount={42} didCount={26} text="기록이 되었습니다" />
      <RetrospectCard date="2022.07" percentage={90} todoCount={62} didCount={16} text="기록이 되었습니다" />
    </Container>
  );
}

export default RetrospectList;
