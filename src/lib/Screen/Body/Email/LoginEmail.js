import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import './LoginEmail.css';
import {withModule} from "react-hoc-di";
import {EMAIL_ADDRESS} from '../../../Constants/i18n';
import EmailUtils from './EmailUtils';
import arrow_right_image from '../../../Images/arrow_right.svg';
import {Icon} from "react-basic-icon";

const LoginEmail = props => {
  const {module, onEmailSubmit} = props;
  const {loginManager, toastRelay} = module;

  const [value, setValue] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const emailInput = useRef();

  useEffect(() => {
    emailInput.current.focus();
  }, []);

  useEffect(() => {
    return () => {
      toastRelay.show(null);
    }
  }, [toastRelay]);

  const onInputChange = useCallback((event) => {
    const entry = event.target.value.trim();
    const isValid = EmailUtils.isEmailValid(entry);
    setValue(entry);
    setEmailValid(isValid);
  }, []);

  const onSubmit = useCallback(() => {
    const isValid = EmailUtils.isEmailValid(value);

    if (isValid) {
      loginManager.loginWithEmail(value, () => onEmailSubmit(true), () => onEmailSubmit(false));
    } else {
      console.warn('Invalid Email Address');
    }
  }, [value, loginManager, onEmailSubmit]);

  const onEnterPress = useCallback((event) => {
    if (event.key !== 'Enter') {
      return;
    }
    onSubmit();
  }, [onSubmit]);

  const submitClass = useMemo(() => {
    return emailValid ? 'FirebaseEmailValid' : 'FirebaseEmailInvalid';
  }, [emailValid]);

  return (
    <div id='FirebaseLoginEmailFormOuter'>
      <div id='FirebaseLoginEmailFormTitle'>
        {EMAIL_ADDRESS}
      </div>
      <div id='FirebaseLoginEmailForm'>
        <input
          ref={emailInput}
          id='FirebaseLoginEmailInput'
          type='text'
          value={value}
          onChange={onInputChange}
          onKeyDown={onEnterPress}
          spellCheck={false}
          autoComplete={'off'}
        />
        <div id='FirebaseLoginEmailSubmit' className={submitClass} onClick={onSubmit}>
          <Icon id='FirebaseLoginEmailSubmitIcon' className={submitClass} src={arrow_right_image}/>
        </div>
      </div>
    </div>
  );
}

export default withModule(LoginEmail);
