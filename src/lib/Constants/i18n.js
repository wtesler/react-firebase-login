export let EMAIL_ADDRESS = 'Email Address';
export let EMAIL_SENT = "Click the link that was just sent to your email. You may close this window.";
export let SIGN_IN_GOOGLE = 'Sign in with Google';
export let SIGN_IN_EMAIL = 'Sign in with Email';

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
