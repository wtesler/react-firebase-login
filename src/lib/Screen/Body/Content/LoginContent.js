import React, {useCallback, useMemo, useState} from 'react';
import './LoginContent.css';
import emailSuccessIcon from '../../../Images/email_success.svg';
import googleIcon from '../../../Images/google.svg';
import {EMAIL_SENT, LOGIN_LEGAL, PRIVACY_POLICY, SIGN_IN_GOOGLE, TERMS_OF_SERVICE} from '../../../Constants/i18n';
import {Icon} from "react-basic-icon";
import LoginEmail from './Email/LoginEmail';
import {withModule} from "react-hoc-di";

const LoginContent = props => {
  const {module, logoSrc, termsLink, privacyLink} = props;
  const {loginManager} = module;

  const [emailSent, setEmailSent] = useState(false);

  const onEmailSubmit = useCallback(isSuccess => {
    setEmailSent(isSuccess);
  }, []);

  const onGoogleLoginClicked = useCallback(() => {
    loginManager.loginWithGoogle();
  }, [loginManager]);

  const bottomElement = useMemo(() => {
    if (!termsLink && !privacyLink) {
      return null;
    }
    if ((termsLink && !privacyLink) || (!termsLink && privacyLink)) {
      console.warn("You must supply both a termsLink and privacyLink in order for the bottom element to show.");
      return null;
    }

    const legalSplit = LOGIN_LEGAL.split("*");

    const legalLinkClass = 'FirebaseLoginContentBottomLegalLink'

    return (
      <div id='FirebaseLoginContentBottomOuter'>
        <>
          <span>{legalSplit[0]}</span>
          <span>
            <a className={legalLinkClass} href={termsLink}>
              {TERMS_OF_SERVICE}
            </a>
          </span>
          <span>{legalSplit[1]}</span>
          <span>
            <a className={legalLinkClass} href={privacyLink}>
              {PRIVACY_POLICY}
            </a>
          </span>
          <span>{legalSplit[2]}</span>
        </>
      </div>
    )
  }, [termsLink, privacyLink]);

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
          {bottomElement}
        </div>
      </>
    )
  }, [onGoogleLoginClicked, onEmailSubmit, bottomElement]);

  const emailSentContent = useMemo(() => {
    return (
      <div id={'FirebaseLoginContentEmailSentOuter'}>
        <div>
          <Icon id={'FirebaseLoginContentEmailSentIcon'} src={emailSuccessIcon}/>
        </div>
        <div id={'FirebaseLoginContentEmailSentMessage'}>{EMAIL_SENT}</div>
      </div>
    );
  }, []);

  const content = useMemo(() => {
    return emailSent ? emailSentContent : formContent;
  }, [formContent, emailSentContent, emailSent]);

  const logo = useMemo(() => {
    if (!logoSrc) {
      return null;
    }
    return (
      <div id='FirebaseLoginContentLogoOuter'>
        <Icon id='FirebaseLoginContentLogoImage' src={logoSrc}/>
      </div>
    );
  }, [logoSrc]);

  return (
    <div id='FirebaseLoginContent'>
      {logo}
      {content}
    </div>
  )
}

export default withModule(LoginContent);
