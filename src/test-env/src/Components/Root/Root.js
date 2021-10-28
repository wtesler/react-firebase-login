import React from 'react';
import './Root.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import FirebaseStartup from "./Firebase/FirebaseStartup";
import {LoginPortal} from "../../../../lib/index";
import UserScreen from "./User/UserScreen";
/**
 * Top-Level Component for the App.
 */
const Root = () => {
  const withLogin = (component) => {
    const bogusLink = 'https://google.com';
    const contentProps = {
      logoSrc: 'https://storage.googleapis.com/mivie_public_resources/Logo/logo_primary_dark.svg',
      explainerTitle: 'Welcome to the Sample Portal',
      explainer: 'Login or create an account below. Through creating an account, you will become a Sample Community Member, gaining access to additional resources, making connections with other community members, and the ability to easily apply for the Sample Certification.',
      privacyLink: bogusLink,
      termsLink: bogusLink,
    }
    return () => (
      <LoginPortal contentProps={contentProps}>
        {component}
      </LoginPortal>
    )
  }

  const path = '/';

  return (
    <div id='Root'>
      <FirebaseStartup/>
      <BrowserRouter>
        <Switch>
          <Route path={path} render={withLogin(<UserScreen/>)}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Root;
