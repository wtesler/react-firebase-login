import React from 'react';
import LoginPortalInner from "./LoginPortalInner";
import {RootOverlays} from "react-root-overlays";

const LoginPortal = props => {
  const {children} = props;

  return (
    <RootOverlays>
      <LoginPortalInner>
        {children}
      </LoginPortalInner>
    </RootOverlays>
  );
}

export default LoginPortal;
