import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AuthForm from '../../components/Auth/AuthForm';
import AuthTemplate from '../../components/Auth/AuthTemplate';

function SignInPage() {
  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const navigate = useNavigate();
  const { state } = useLocation();

  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');

  const raw = JSON.stringify({
    email: userId,
    password: userPassword,
  });

  const requestOptions: any = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };

  const requestSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch(
        'http://3.35.154.223:8080/v1/user/sign-in',
        requestOptions
      );
      const result: any = await response.json();
      console.log(result);

      localStorage.setItem('user-token', result.data);

      if (localStorage.getItem('user-token') === 'null') {
        navigate(state);
      } else {
        navigate('/mainTodoList');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthTemplate>
      <AuthForm
        setUserId={setUserId}
        setUserPassword={setUserPassword}
        requestSign={requestSignIn}
        type="signIn"
      />
    </AuthTemplate>
  );
}

export default SignInPage;
