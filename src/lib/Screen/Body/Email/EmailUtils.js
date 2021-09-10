export default class EmailUtils {

  static EMAIL_REGEX = /^[-!#$%&'*+0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

  static isEmailValid(email) {
    if (!email) return false;

    if (email.length > 256) return false;

    if (!EmailUtils.EMAIL_REGEX.test(email)) return false;

    const [account, address] = email.split('@');
    if (account.length > 64) return false;

    const domainParts = address.split('.');
    return !domainParts.some(function(part) {
      return part.length > 63;
    });
  }
}
