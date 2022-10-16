import React, { useState } from 'react';
import styled from 'styled-components';
import errorImg from '../../assets/authImg/error.svg';

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

  ::placeholder {
    padding-left: 10px;
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

  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  &:hover {
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      #21272a;
    color: white;
  }
`;

const ErrorMessage = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  color: #db3450;
  margin: 6px 0px;

  display: flex;
  align-items: center;
`;

const ErrorImage = styled.img`
  margin-right: 5px;
`;

function AuthForm({
  setUserId,
  setUserPassword,
  setUserPasswordCheck,
  requestSign,
  userPassword,
  type,
}: any) {
  const [userIdError, setUserIdError] = useState(false);
  const [userPWError, setUserPWError] = useState(false);
  const [userPWCheckError, setUserPWCheckError] = useState(false);

  const onChangeUserId = (e: any) => {
    const userIdRegex = /^[0-9a-zA-Z]{5,}$/;
    if (!e.target.value || userIdRegex.test(e.target.value))
      setUserIdError(false);
    else setUserIdError(true);
    setUserId(e.target.value);
  };
  const onChangePassword = (e: any) => {
    const userPWRegex = /^[0-9a-zA-Z]{5,}$/;
    if (!e.target.value || userPWRegex.test(e.target.value))
      setUserPWError(false);
    else setUserPWError(true);
    setUserPassword(e.target.value);
  };

  const onChangePasswordCheck = (e: any) => {
    setUserPasswordCheck(e.target.value);
    if (userPassword === e.target.value) {
      setUserPWCheckError(false);
    } else {
      setUserPWCheckError(true);
    }
  };

  return (
    <AuthFormWrapper>
      {type === 'signUp' ? (
        <AuthInfoMessage>계정을 생성해주세요</AuthInfoMessage>
      ) : (
        <AuthInfoMessage>로그인</AuthInfoMessage>
      )}
      <form onSubmit={requestSign}>
        <StyledInput
          autoComplete="username"
          name="username"
          placeholder="아이디"
          onChange={onChangeUserId}
        />

        <StyledInput
          autoComplete="current-password"
          name="password"
          placeholder="비밀번호"
          type="password"
          onChange={onChangePassword}
        />

        {type === 'signUp' && (
          <StyledInput
            autoComplete="new-password"
            name="passwordCheck"
            placeholder="비밀번호 확인"
            type="password"
            onChange={onChangePasswordCheck}
          />
        )}
        {userIdError && (
          <ErrorMessage>
            <ErrorImage src={errorImg} alt="아이디 유효성 에러" />
            아이디를 입력해주세요.
          </ErrorMessage>
        )}
        {userPWError && (
          <ErrorMessage>
            <ErrorImage src={errorImg} alt="비밀번호 유효성 에러" />
            비밀번호을 입력해주세요.
          </ErrorMessage>
        )}
        {userPWCheckError && (
          <ErrorMessage>
            <ErrorImage src={errorImg} alt="비밀번호 확인 유효성 에러" />
            비밀번호 확인이 일치하지 않습니다.
          </ErrorMessage>
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
