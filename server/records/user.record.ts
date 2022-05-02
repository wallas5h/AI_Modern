import { v4 as uuid } from "uuid";
import { UserRegister } from "../types";

export class UserRecord implements UserRegister {
  id?: string;
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
  terms: boolean;
  refreshToken: string;
  sessionToken?: string | null;

  constructor(obj: UserRecord) {

    const { id, firstName, lastName, mail, password, terms, refreshToken, sessionToken } = obj;

    this.id = id ?? uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.password = password;
    this.terms = Boolean(terms);
    this.refreshToken = refreshToken;
    this.sessionToken = sessionToken ?? null;
  }
}