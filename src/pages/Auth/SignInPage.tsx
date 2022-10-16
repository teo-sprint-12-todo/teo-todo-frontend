import React from 'react';
import AuthForm from '../../components/Auth/AuthForm';
import AuthTemplate from '../../components/Auth/AuthTemplate';

function SignInPage() {
  return (
    <AuthTemplate>
      <AuthForm type="signIn" />
    </AuthTemplate>
  );
}

export default SignInPage;
