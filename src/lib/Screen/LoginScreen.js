import React from 'react';
import './LoginScreen.css';
import {withModule} from "react-hoc-di";
import LoginScreenBody from "./Body/LoginScreenBody";

const LoginScreen = () => {
  return (
    <div id="FirebaseLoginScreen">
      <div id='FirebaseLoginScreenBodyContainer'>
        <LoginScreenBody/>
      </div>
    </div>
  );
}

export default withModule(LoginScreen);
