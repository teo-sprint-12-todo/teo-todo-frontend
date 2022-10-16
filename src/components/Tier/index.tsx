import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import tier1Img from '../../assets/tierImg/tier1.png';
import tier2Img from '../../assets/tierImg/tier2.png';
import tier3Img from '../../assets/tierImg/tier3.png';
import tier4Img from '../../assets/tierImg/tier4.png';
import tier5Img from '../../assets/tierImg/tier5.png';
import tier6Img from '../../assets/tierImg/tier6.png';
import tier7Img from '../../assets/tierImg/tier7.png';
// import checked from '../assets/checked.png'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 40px;
  padding: 8px 0px;
`;

const TierImage = styled.img`
  padding: 6px;
  margin-left: 20px;

  background-color: #ebebf0;
  border-radius: 8px;
`;

const StyledLink = styled(Link)`
  display: block;
  /* background-color: tomato; */

  margin-right: 15px;
  padding: 4px 8px;

  font-size: 10px;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
  border-radius: 5px;

  text-decoration: none;
  color: black;
`;

export interface Item {
  tierLevel: number;
}

// todo : 서버에서 tier 레벨을 받아와 해당 레벨에 맞는 이미지 출력
function Tier() {
  // 회원가입, 로그인창 생성
  // 로그인을 했다면 둘다 삭제, 로그아웃 버튼만 생성
  // 회원가입 클릭시 => 회원가입 모달 생성
  // 로그인 클릭시 => 로그인 모달 생성

  return (
    <Wrapper>
      <TierImage src={tier1Img} alt="티어이미지" />
      <Wrapper>
        <StyledLink to="/signIn">로그인</StyledLink>
        <StyledLink to="/signUp">회원가입</StyledLink>
      </Wrapper>
    </Wrapper>
  );
}

export default Tier;
