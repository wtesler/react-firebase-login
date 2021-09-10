import {LoginManager} from 'firebase-login-manager';

export const LoginModule = (rootModule) => {
  const module = {
    loginManager: new LoginManager(true, rootModule.toastRelay),
  };

  return [
    module,
    () => {
      module.loginManager.destruct();
    }
  ];
}

export default LoginModule;
