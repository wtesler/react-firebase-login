import React, {useCallback, useMemo, useState} from 'react';
import './LoginContent.css';
import emailSuccessIcon from '../../../Images/email_success.svg';
import googleIcon from '../../../Images/google.svg';
import {EMAIL_SENT, SIGN_IN_GOOGLE} from '../../../Constants/i18n';
import {Icon} from "react-basic-icon";
import LoginEmail from './Email/LoginEmail';
import {withModule} from "react-hoc-di";

const LoginContent = props => {
  const {module} = props;
  const {loginManager} = module;

  const [emailSent, setEmailSent] = useState(false);

  const onEmailSubmit = useCallback(isSuccess => {
    setEmailSent(isSuccess);
  }, []);

  const onGoogleLoginClicked = useCallback(() => {
    loginManager.loginWithGoogle();
  }, [loginManager]);

  const createOption = (onClick, text, image) => {
    return (<div
      className={'FirebaseLoginContentOption'}
      onClick={onClick}
    >
      <div className={'FirebaseLoginContentOptionContent'}>
        <div className={'FirebaseLoginContentOptionImageOuter'}>
          <Icon className={'FirebaseLoginContentOptionImage'} src={image}/>
        </div>
        <div className={'FirebaseLoginContentOptionText'}>
          {text}
        </div>
      </div>
    </div>);
  }

  const formContent = useMemo(() => {
    const dashOuterClass = 'FirebaseLoginContentOrDashOuter';
    const dashClass = 'FirebaseLoginContentOrDash';

    const createDash = () => {
      return (
        <div className={dashOuterClass}>
          <div className={dashClass}/>
        </div>
      )
    };

    return (
      <>
        <div id='FirebaseLoginContentOptions'>
          <LoginEmail onEmailSubmit={onEmailSubmit}/>
          <div id='FirebaseLoginContentOrOuter'>
            {createDash()}
            <div id={'FirebaseLoginContentOr'}>{'or'}</div>
            {createDash()}
          </div>
          {createOption(onGoogleLoginClicked, SIGN_IN_GOOGLE, googleIcon)}
        </div>
      </>
    )
  }, [onGoogleLoginClicked, onEmailSubmit]);

  const emailSentContent = useMemo(() => {
    return (
      <div id={'FirebaseLoginContentEmailSentOuter'}>
        <div>
          <Icon id={'FirebaseLoginContentEmailSentIcon'} src={emailSuccessIcon} />
        </div>
        <div id={'FirebaseLoginContentEmailSentMessage'}>{EMAIL_SENT}</div>
      </div>
    );
  }, []);

  const content = useMemo(() => {
    return emailSent ? emailSentContent : formContent;
  }, [formContent, emailSentContent, emailSent]);

  return (
    <div id='FirebaseLoginContent'>
      {content}
    </div>
  )
}

export default withModule(LoginContent);
