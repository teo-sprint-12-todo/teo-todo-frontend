import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthForm from '../../components/Auth/AuthForm';
import AuthTemplate from '../../components/Auth/AuthTemplate';

function SignUpPage() {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userPasswordCheck, setUserPasswordCheck] = useState('');

  const navigate = useNavigate();
  const { state } = useLocation();

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    email: userId,
    password: userPassword,
    passwordCheck: userPasswordCheck,
  });

  const requestOptions: any = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const requestSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'http://3.35.154.223:8080/v1/user/sign-up',
        requestOptions
      );
      const result: any = await response.json();
      console.log(result.resMessage);
      if (result.resMessage === '회원 가입 완료') {
        navigate('/mainTodoList');
      } else {
        navigate(state);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <AuthTemplate>
      <AuthForm
        setUserId={setUserId}
        setUserPassword={setUserPassword}
        setUserPasswordCheck={setUserPasswordCheck}
        requestSign={requestSignUp}
        type="signUp"
        userPassword={userPassword}
      />
    </AuthTemplate>
  );
}

export default SignUpPage;
