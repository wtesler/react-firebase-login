export let EMAIL_ADDRESS = 'Email Address';
export let EMAIL_SENT = "Click the link that was just sent to your email. You may close this window.";
export let LOGIN_LEGAL = "Continue to agree to the * and acknowledge that the * applies to you."; // * is placeholder word
export let PRIVACY_POLICY = "Privacy Policy";
export let SIGN_IN_GOOGLE = 'Sign in with Google';
export let TERMS_OF_SERVICE = "Terms of Service";

function localize(code) {
  if (code.startsWith('zh')) {

  } else if (code.startsWith('es')) {

  }
}

class i18n {
  constructor() {
    try {
      const languageCode = window.navigator.language;
      localize(languageCode);
    } catch (e) {
      console.warn('Localization Failed');
      console.warn(e);
    }
  }
}

const i18nInstance = new i18n();

export default i18nInstance;
