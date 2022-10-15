import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  margin-top:28.82px;
`;

const Tap = styled.div<{ name: string, selectedValue:string }>`
  width:96px;
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.01em;
  text-align: center;
  
  ${({ name, selectedValue }) => (name === selectedValue
    ? 'color: #0E0E0F;'
    : 'color: #BCBCC0;')
}
`;

const TapBottomSheet = styled.div<{ name: string, selectedValue:string }>`
  width:96px;
  height:3px;
  border-radius: 30px 20px 0px 0px;
  
  ${({ name, selectedValue }) => (name === selectedValue
    ? 'background-color:#6C6C70;'
    : 'background-color: #EBEBF0;')
}
`;

function RetrospectCategory() {
  const [selectedCategory, setSelectedCategory] = useState('모두');

  return (
    <Container>
      <Tap name="모두" selectedValue={selectedCategory} onClick={() => setSelectedCategory('모두')}>
        모두
        <TapBottomSheet name="모두" selectedValue={selectedCategory} />
      </Tap>
      <Tap name="카테고리1" selectedValue={selectedCategory} onClick={() => setSelectedCategory('카테고리1')}>
        카테고리1
        <TapBottomSheet name="카테고리1" selectedValue={selectedCategory} />
      </Tap>
      <Tap name="카테고리2" selectedValue={selectedCategory} onClick={() => setSelectedCategory('카테고리2')}>
        카테고리2
        <TapBottomSheet name="카테고리2" selectedValue={selectedCategory} />
      </Tap>
    </Container>
  );
}

export default RetrospectCategory;
