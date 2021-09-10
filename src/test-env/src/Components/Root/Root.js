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
