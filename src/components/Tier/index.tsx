import React, { useState } from 'react';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 40px;
  padding: 8px 0px;
`;

const TierImage = styled.img`
  padding: 6px;
  margin-left: 20px;

  background-color: #ebebf0;
  border-radius: 8px;
`;

// todo : 서버에서 tier 레벨을 받아와 해당 레벨에 맞는 이미지 출력
function Tier() {
  return (
    <Header>
      <TierImage src="/tierImg/tier1.png" alt="tier" />
    </Header>
  );
}

export default Tier;
