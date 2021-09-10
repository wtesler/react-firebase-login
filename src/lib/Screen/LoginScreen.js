import React from 'react';
import './LoginScreen.css';
import {withModule} from "react-hoc-di";
import LoginScreenBody from "./Body/LoginScreenBody";

const LoginScreen = props => {
  const {contentProps} = props;
  return (
    <div id="FirebaseLoginScreen">
      <div id='FirebaseLoginScreenBodyContainer'>
        <LoginScreenBody contentProps={contentProps}/>
      </div>
    </div>
  );
}

export default withModule(LoginScreen);
