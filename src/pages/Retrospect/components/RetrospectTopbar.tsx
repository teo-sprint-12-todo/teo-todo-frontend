import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import styled from 'styled-components';
import doubleQuoteEnd from '../../../assets/retrospectImg/doubleQuoteEnd.svg';
import doubleQuoteStart from '../../../assets/retrospectImg/doubleQuoteStart.svg';
import tier1 from '../../../assets/tierImg/tier1.png';
import tier2 from '../../../assets/tierImg/tier2.png';
import tier3 from '../../../assets/tierImg/tier3.png';
import tier4 from '../../../assets/tierImg/tier4.png';
import tier5 from '../../../assets/tierImg/tier5.png';
import tier6 from '../../../assets/tierImg/tier6.png';
import tier7 from '../../../assets/tierImg/tier7.png';

const Container = styled.div`
  display:flex;
  align-items:center;
  margin-top:2em;
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
  position:relative;
  top:-7%;
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
  myTier: number;
}

function RetrospectTopbar({ percentage, text, myTier }:RetrospectTopbarProps) {
  const TIERIMG = ['dummy', tier1,tier2,tier3,tier4,tier5,tier6, tier7];

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
            <Img src={TIERIMG[myTier]} />
          </ImgBg>
        </CircularProgressbarWithChildren>
      </ImgContainer>
      <TextContainer>
        <Quote alt="quote" src={doubleQuoteStart} top="-19.85px" left="0px" />
        <Text>
          {text}
        </Text>
        <Quote alt="quote" src={doubleQuoteEnd} bottom="-19.85px" right="0px" />
      </TextContainer>
    </Container>
  );
}

export default RetrospectTopbar;
