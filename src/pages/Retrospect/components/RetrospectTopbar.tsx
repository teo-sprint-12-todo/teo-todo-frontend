import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  align-items:center;
  margin-top:55px;
`;

const ImgContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:60px;
  height:60px;
  border:2px solid black;
  border-radius:50%;
`;

const ImgBg = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  width:50px;
  height:50px;
  border-radius:50%;
  background-color:#EBEBF0;
`;

const Img = styled.img`
  width:30px;
  height:30px;
`;

const TextContainer = styled.div`
  position:relative;
  height:44px;
  margin-left:14px;
`;

const Text = styled.div`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: left;
`;

const Quote = styled.img`
  position:absolute;
  ${({
    top, bottom, left, right,
  }:{ top?:string; bottom?:string; left?:string; right?:string; }) => `
      ${top && `top:${top}`}; 
      ${bottom && `bottom:${bottom}`}; 
      ${left && `left:${left}`}; 
      ${right && `right:${right}`}; 
    `
}
`;

function RetrospectTopbar() {
  return (
    <Container>
      <ImgContainer>
        <ImgBg>
          <Img src="/assets/img/flower-pot.svg" />
        </ImgBg>
      </ImgContainer>
      <TextContainer>
        <Quote alt="quote" src="/assets/img/doubleQuoteStart.svg" top="-10.85px" left="0px" />
        <Text>
          지난 한일을 돌아보며
          <br />
          생각을 기록해보세요
        </Text>
        <Quote alt="quote" src="/assets/img/doubleQuoteEnd.svg" bottom="-10.85px" right="0px" />
      </TextContainer>
    </Container>
  );
}

export default RetrospectTopbar;
