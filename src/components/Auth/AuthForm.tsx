import React from 'react';
import styled from 'styled-components';

const AuthFormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: 20px;
`;

const AuthInfoMessage = styled.p`
  margin: auto;
  margin-bottom: 45px;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
`;

const StyledInput = styled.input`
  font-size: 1rem;

  border: 1px solid #d8d8dc;
  border-radius: 2px;
  padding: 0;

  width: 100%;
  height: 44px;
  &:focus {
    color: $oc-teal-7;
    border-bottom: 1px solid #505050;
  }

  & + & {
    margin-top: 0.6rem;
  }
`;

const Submit = styled.button`
  width: 100%;
  padding: 13px 0px;
  margin-top: 26px;
  border-radius: 8px;
  border: none;

  background: linear-gradient(0deg, #ebebf0, #ebebf0), #21272a;
  color: #bcbcc0;
  /* 아이디 비밀번호가 유효할때 
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    #21272a;
  color: white;
    */

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
`;

function AuthForm({ type }: any) {
  return (
    <AuthFormWrapper>
      {type === 'signUp' ? (
        <AuthInfoMessage>계정을 생성해주세요</AuthInfoMessage>
      ) : (
        <AuthInfoMessage>로그인</AuthInfoMessage>
      )}
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
        {type === 'signUp' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            type="password"
          />
        )}
        {type === 'signUp' ? (
          <Submit>회원가입</Submit>
        ) : (
          <Submit>다음으로</Submit>
        )}
      </form>
    </AuthFormWrapper>
  );
}

export default AuthForm;
