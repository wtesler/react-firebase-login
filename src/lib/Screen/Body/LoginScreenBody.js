import React from 'react';
import './LoginScreenBody.css';
import LoginContent from "./Content/LoginContent";

const LoginScreenBody = () => {
  const bogusLink = 'https://google.com';
  return (
    <div id='FirebaseLoginScreenBodyOuter'>
      <LoginContent termsOfServiceLink={bogusLink} privacyPolicyLink={bogusLink}/>
    </div>
  )
}

export default LoginScreenBody;
