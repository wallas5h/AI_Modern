
import { UserLogInReq, UserRegisterReq, UserResetPasswordReq } from 'types';



export const generateQueryString = (params: any): string => {
  const qs = new URLSearchParams(params);
  return `${qs}`.replace(/\+/g, '%20');
}

export interface UserRegisterForm extends UserRegisterReq {
  repeat: string
}

export const messagesValidation = {
  name__incorect: 'first / last names should have at least 3 characters long and not longer than 25 characters',
  mail__incorect: 'Invalid e-mail',
  password__incorect: 'The password must be at least 8 characters, not more than 15 characters and must contain at least one digit, one letter and one special character.',
  repeat__incorect: 'Passwords do not match.',
  terms__incorect: 'Don\'t accepted terms of service'
}

export const singinFunctionFormValidation = (form: UserLogInReq | UserResetPasswordReq) => {

  let mail = false;

  if (
    typeof form.mail === 'string' &&
    form.mail.indexOf(' ') === -1 &&
    form.mail.indexOf('@') !== -1 &&
    form.mail.lastIndexOf('@') !== -1 &&
    form.mail.lastIndexOf('.') !== -1 &&
    form.mail.indexOf('@@') === -1 &&
    form.mail.length > 2 &&
    form.mail.length < 26 &&
    form.mail.match(
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
  ) {
    mail = true;
  }

  return { mail }
}

export const singupFunctionFormValidation = (form: UserRegisterForm) => {
  let firstName = false;
  let lastName = false;
  let mail = false;
  let password = false;
  let repeat = false;
  let terms = false;
  let correct = false;

  if (
    typeof form.firstName === 'string' &&
    form.firstName.indexOf(' ') === -1 &&
    form.firstName.match(/^[a-zA-Z]+$/) &&
    form.firstName.length > 2 &&
    form.firstName.length < 26
  ) {
    firstName = true;
  }
  if (
    typeof form.lastName === 'string' &&
    form.lastName.indexOf(' ') === -1 &&
    form.lastName.match(/^[a-zA-Z]+$/) &&
    form.lastName.length > 2 &&
    form.lastName.length < 26
  ) {
    lastName = true;
  }
  if (
    typeof form.mail === 'string' &&
    form.mail.indexOf(' ') === -1 &&
    form.mail.indexOf('@') !== -1 &&
    form.mail.lastIndexOf('@') !== -1 &&
    form.mail.lastIndexOf('.') !== -1 &&
    form.mail.indexOf('@@') === -1 &&
    form.mail.length > 2 &&
    form.mail.length < 26 &&
    form.mail.match(
      /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/)
  ) {
    mail = true;
  }

  if (
    typeof form.password === 'string' &&
    form.password.indexOf(' ') === -1 &&
    form.password.length > 7 &&
    form.password.length < 15 &&
    form.password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/)
  ) {
    password = true;
  }
  if (
    typeof form.repeat === 'string' &&
    form.password === form.repeat
  ) {
    repeat = true;
  }

  if (form.terms) {
    terms = true;
  }

  if (firstName && lastName && mail && password && repeat && terms) {
    correct = true;
  }

  return ({ correct, firstName, lastName, mail, password, repeat, terms })
}
