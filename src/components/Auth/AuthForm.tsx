import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AuthFormWrapper = styled.div`
  h3 {
    margin: 0;
    color: #8e8e93;
    margin-bottom: 16px;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledInput = styled.input`
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid #505050;
  padding-bottom: 8px;
  outline: none;
  width: 100%;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid #505050;
  }
  /* Scss 에서 쓰는 요소가 서로 반복될 때 margin-top 을 줌 >>> input 과 input 사이에 margin-top 줌. */
  & + & {
    margin-top: 1rem;
  }
`;
const Footer = styled.div`
  margin-top: 2rem;
  text-align: right;
  a {
    color: 1px solid #d8d8dc;
    text-decoration: underline;
    &:hover {
      color: 1px solid #737373;
    }
  }
`;

function AuthForm({ type }: any) {
  const text = type;

  return (
    <AuthFormWrapper>
      <h3>{text}</h3>
      <form>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
        />
        <StyledInput
          autoComplete="current-password"
          name="password"
          placeholder="비밀번호"
          type="password"
        />
        {/* type 이 회원가입이면, 비밀번호 확인 인풋 추가 */}
        {text === 'signUp' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
      </form>
      <Footer>
        {type === 'signIn' ? (
          <Link to="/signUp">회원가입</Link>
        ) : (
          <Link to="/signIn">로그인</Link>
        )}
      </Footer>
    </AuthFormWrapper>
  );
}

export default AuthForm;
