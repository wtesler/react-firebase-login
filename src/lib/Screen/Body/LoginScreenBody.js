import React, {useCallback, useMemo, useState} from 'react';
import './LoginScreenBody.css';
import emailSuccessIcon from '../../Images/email_success.svg';
import googleIcon from '../../Images/google.svg';
import {EMAIL_SENT, SIGN_IN_GOOGLE} from '../../Constants/i18n';
import {Icon} from "react-basic-icon";
import LoginEmail from './Email/LoginEmail';
import {withModule} from "react-hoc-di";

const LoginScreenBody = props => {
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
      className={'FirebaseLoginScreenBodyOption'}
      onClick={onClick}
    >
      <div className={'FirebaseLoginScreenBodyOptionContent'}>
        <div className={'FirebaseLoginScreenBodyOptionImageOuter'}>
          <Icon className={'FirebaseLoginScreenBodyOptionImage'} src={image}/>
        </div>
        <div className={'FirebaseLoginScreenBodyOptionText'}>
          {text}
        </div>
      </div>
    </div>);
  }

  const formContent = useMemo(() => {
    const dashOuterClass = 'FirebaseLoginScreenBodyOrDashOuter';
    const dashClass = 'FirebaseLoginScreenBodyOrDash';

    const createDash = () => {
      return (
        <div className={dashOuterClass}>
          <div className={dashClass}/>
        </div>
      )
    };

    return (
      <>
        <div id='FirebaseLoginScreenBodyOptions'>
          <LoginEmail onEmailSubmit={onEmailSubmit}/>
          <div id='FirebaseLoginScreenBodyOrOuter'>
            {createDash()}
            <div id={'FirebaseLoginScreenBodyOr'}>{'or'}</div>
            {createDash()}
          </div>
          {createOption(onGoogleLoginClicked, SIGN_IN_GOOGLE, googleIcon)}
        </div>
      </>
    )
  }, [onGoogleLoginClicked, onEmailSubmit]);

  const emailSentContent = useMemo(() => {
    return (
      <div id={'FirebaseLoginScreenBodyEmailSentOuter'}>
        <div>
          <Icon id={'FirebaseLoginScreenBodyEmailSentIcon'} src={emailSuccessIcon} />
        </div>
        <div id={'FirebaseLoginScreenBodyEmailSentMessage'}>{EMAIL_SENT}</div>
      </div>
    );
  }, []);

  const content = useMemo(() => {
    return emailSent ? emailSentContent : formContent;
  }, [formContent, emailSentContent, emailSent]);

  return (
    <div id='FirebaseLoginScreenBodyOuter'>
      <div id='FirebaseLoginScreenBodyContent'>
        {content}
      </div>
    </div>
  )
}

export default withModule(LoginScreenBody);
