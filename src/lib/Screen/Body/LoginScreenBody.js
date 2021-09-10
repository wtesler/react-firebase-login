import React from 'react';
import './LoginScreenBody.css';
import LoginContent from "./Content/LoginContent";

const LoginScreenBody = props => {
  const {contentProps} = props;
  return (
    <div id='FirebaseLoginScreenBodyOuter'>
      <LoginContent {...contentProps}/>
    </div>
  )
}

export default LoginScreenBody;
