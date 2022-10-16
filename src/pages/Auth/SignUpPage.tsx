import React from 'react';
import AuthForm from '../../components/Auth/AuthForm';
import AuthTemplate from '../../components/Auth/AuthTemplate';

function SignUpPage() {
  return (
    <AuthTemplate>
      <AuthForm type="signUp" />
    </AuthTemplate>
  );
}

export default SignUpPage;
