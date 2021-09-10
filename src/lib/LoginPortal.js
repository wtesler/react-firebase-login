import React from 'react';
import LoginPortalInner from "./LoginPortalInner";
import {RootOverlays} from "react-root-overlays";

const LoginPortal = props => {
  const {children, contentProps} = props;

  return (
    <RootOverlays>
      <LoginPortalInner contentProps={contentProps}>
        {children}
      </LoginPortalInner>
    </RootOverlays>
  );
}

export default LoginPortal;
