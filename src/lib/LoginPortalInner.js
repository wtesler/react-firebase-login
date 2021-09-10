import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {withModule} from 'react-hoc-di';
import LoginScreen from './Screen/LoginScreen';
import LoginModule from './Module/LoginModule';

const LoginPortalInner = props => {
  const {children, module} = props;
  const {loginManager} = module;

  const [isLoggedIn, setIsLoggedIn] = useState(undefined);

  const onUser = useCallback(user => {
    setIsLoggedIn(Boolean(user));
  }, []);

  useEffect(() => {
    loginManager.addListener(onUser);
    return () => {
      loginManager.removeListener(onUser);
    }
  }, [loginManager, onUser]);

  const content = useMemo(() => {
    if (isLoggedIn === undefined) {
      // Special condition to handle state before login manager has emit.
      return null;
    }
    return isLoggedIn ? children : <LoginScreen/>;
  }, [isLoggedIn, children]);

  return (
    <>
      {content}
    </>
  );
}

export default withModule(LoginPortalInner, LoginModule);
