import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import closeImg from '../../assets/authImg/close.svg';

const AuthTemplateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height:100vh;
  background: #ffffff;
`;

const WhiteBox = styled.div<{isSignup: boolean}>`
  .logo-area {
    display: block;
    padding-bottom: 2rem;
    text-align: center;
    font-weight: bold;
    /* 글자 간격 */
    letter-spacing: 2px;
  }
  
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.025);
  padding: 2rem;
  width: 360px;
  background: white;
  border-radius: 2px;
  margin-top: ${({isSignup})=> isSignup? "96px" : "64px"};
`;

const LinkToMain = styled(Link)`
  position: absolute;
  top: 15px;
  right: 15px;
`;

function AuthTemplate({ children }: any) {
  return (
    <AuthTemplateWrapper>
      <WhiteBox isSignup={window.location.pathname === '/teo-todo-frontend/signUp'}>
        <LinkToMain to="/mainTodoList">
          <img src={closeImg} alt="메인페이지 이동" />
        </LinkToMain>
        {children}
      </WhiteBox>
    </AuthTemplateWrapper>
  );
}

export default AuthTemplate;
