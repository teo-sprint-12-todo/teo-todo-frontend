import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  align-items:center;
  margin-top:55px;
`;

const ImgContainer = styled.div`
  width:60px;
  height:60px;
  border-radius:50%;
`;

const ImgBg = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:-25%;
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
  white-space:pre-wrap;
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

interface RetrospectTopbarProps {
  percentage:number;
  text:string;
}

function RetrospectTopbar({ percentage, text }:RetrospectTopbarProps) {
  return (
    <Container>
      <ImgContainer>
        <CircularProgressbarWithChildren
          value={percentage}
          styles={buildStyles({
            pathTransitionDuration: 0.5,
            pathColor: '#00D2FA',
            trailColor: '#D8D8DC',

          })}
        >
          <ImgBg>
            <Img src="/assets/img/flower-pot.svg" />
          </ImgBg>
        </CircularProgressbarWithChildren>
      </ImgContainer>
      <TextContainer>
        <Quote alt="quote" src="/assets/img/doubleQuoteStart.svg" top="-10.85px" left="0px" />
        <Text>
          {text}
        </Text>
        <Quote alt="quote" src="/assets/img/doubleQuoteEnd.svg" bottom="-10.85px" right="0px" />
      </TextContainer>
    </Container>
  );
}

export default RetrospectTopbar;
