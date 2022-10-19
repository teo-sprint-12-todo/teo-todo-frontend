import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/logo.svg'

const Container = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  height:100vh;
`

const LogoContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
`

const Logo = styled.img``

const LogoText = styled.div`
margin-top:4px;
font-family: 'Pretendard';
font-weight: 500;
font-size: 14px;
line-height: 17px;
text-align: center;
color: #1DAFDE;
`

const BtnContainer = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  margin-top:93px;
`

const SignupBtn = styled.button`
  gap: 8px;
  width: 230px;
  height: 45px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #21272A;
  border-radius: 8px;
  color:#fff;
  border:none;
`

const SigninBtn = styled.button`
width: 230px;
height: 45px;
margin-top:16px;
gap: 8px;
background: #FFFFFF;
border: 1px solid #D8D8DC;
box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.08);
border-radius: 8px;
`

function LandingPage() {
  return (
    <Container>
      <LogoContainer>
        <Logo src={logo} />
        <LogoText>투두</LogoText>
      </LogoContainer>
      <BtnContainer>
        <SignupBtn>처음 사용하시나요?</SignupBtn>
        <SigninBtn>로그인</SigninBtn>
      </BtnContainer>
    </Container>
  );
}

export default LandingPage;