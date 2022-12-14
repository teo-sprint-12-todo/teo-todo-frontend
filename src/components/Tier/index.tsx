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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding: 8px 8px;
  background-color: white;
`;

const NavWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const TierImage = styled.img`
  display: block;
  padding: 6px;
  margin-left: 20px;

  background-color: #ebebf0;
  border-radius: 8px;
`;

const StyledLink = styled(Link)`
  display: block;

  margin-right: 15px;
  padding: 4px 8px;

  border: 1px solid #aeaeb2;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.03);
  border-radius: 4px;

  text-decoration: none;
  color: #007996;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

const LogOutButton = styled.button`
  margin-right: 15px;
  padding: 4px 8px;

  border: 1px solid #aeaeb2;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.03);
  border-radius: 4px;

  text-decoration: none;
  color: #007996;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
`;

export interface Item {
  tierLevel: number;
}

function Tier() {
  const [isLocalStorage, setIsLocalStorage] = useState(
    localStorage.getItem('user-token') !== 'null'
  );

  const removeLocalStorage = () => {
    localStorage.removeItem('user-token');
    setIsLocalStorage(!!localStorage.getItem('user-token'));
  };

  return (
    <Wrapper>
      <TierImage src={tier1Img} alt="티어이미지" />
      {isLocalStorage && localStorage.length > 0 ? (
        <LogOutButton onClick={removeLocalStorage}>로그아웃</LogOutButton>
      ) : (
        <NavWrapper>
          <StyledLink to="/signIn">로그인</StyledLink>
          <StyledLink to="/signUp">회원가입</StyledLink>
        </NavWrapper>
      )}
    </Wrapper>
  );
}

export default Tier;
