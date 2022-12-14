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

const InputContainer = styled.div<{isError:boolean}>`
  display:flex;
  align-items:center;
  width: 260px;
  height: 44px;
  margin-top:8px;
  padding: 16px;
  gap: 10px;
  border-radius: 2px;
  box-sizing: border-box;
  border: ${({isError})=> isError ? '1px solid #DB3450' : '1px solid #D8D8DC' };
`

const InputTitle = styled.div`
  min-width: 84px;
  height: 14px;
  font-family: 'Pretendard';
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #292929;
`

const StyledInput = styled.input`
  width:100%;
  margin-left:10px;
  font-size: 1rem;
  color: #6C6C70;
  border:none;
  font-family: 'Pretendard';
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  outline:none;

  ::placeholder{
    color: #C2D1D9;
  }
`;

const Submit = styled.button`
  width: 100%;
  padding: 13px 0px;
  margin-top: 34px;
  margin-bottom:10px;
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

  height: 20px;
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
    const userIdRegex = /^[0-9a-zA-Z]{4,}$/;
    if (!e.target.value || userIdRegex.test(e.target.value))
      setUserIdError(false);
    else setUserIdError(true);
    setUserId(e.target.value);
  };
  const onChangePassword = (e: any) => {
    const userPWRegex = /^[0-9a-zA-Z]{4,}$/;
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
        <AuthInfoMessage>????????? ??????????????????</AuthInfoMessage>
      ) : (
        <AuthInfoMessage>?????????</AuthInfoMessage>
      )}
      <form onSubmit={requestSign}>
        <InputContainer isError={userIdError}>
          <InputTitle>?????????</InputTitle>
          <StyledInput
            autoComplete="username"
            name="username"
            placeholder="?????????"
            onChange={onChangeUserId}
          />
        </InputContainer>
        <InputContainer isError={userPWError}>
          <InputTitle>????????????</InputTitle>
          <StyledInput
            autoComplete="current-password"
            name="password"
            placeholder="????????????"
            type="password"
            onChange={onChangePassword}
          />
        </InputContainer>

        {type === 'signUp' && (
          <InputContainer isError={userPWCheckError}>
            <InputTitle>???????????? ??????</InputTitle>
            <StyledInput
              autoComplete="new-password"
              name="passwordCheck"
              placeholder="???????????? ??????"
              type="password"
              onChange={onChangePasswordCheck}
            />
          </InputContainer>
        )}

        {type === 'signUp' ? (
          <Submit>????????????</Submit>
          ) : (
            <Submit>????????????</Submit>
            )}
      </form>
        {userIdError ? (
          <ErrorMessage>
            <ErrorImage src={errorImg} alt="????????? ????????? ??????" />
            ???????????? ??????????????????.
          </ErrorMessage>
        ) : (
          <ErrorMessage />
        )}
        {userPWError ? (
          <ErrorMessage>
            <ErrorImage src={errorImg} alt="???????????? ????????? ??????" />
            ??????????????? ??????????????????.
          </ErrorMessage>
        ) : (
          <ErrorMessage />
        )}
        {type === 'signUp' &&
          (userPWCheckError ? (
            <ErrorMessage>
              <ErrorImage src={errorImg} alt="???????????? ?????? ????????? ??????" />
              ???????????? ????????? ???????????? ????????????.
            </ErrorMessage>
          ) : (
            <ErrorMessage />
          ))}
    </AuthFormWrapper>
  );
}

export default AuthForm;
