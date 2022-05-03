import { v4 as uuid } from "uuid";
import { UserRegister } from "../types";

export class UserRecord implements UserRegister {
  id?: string;
  firstName: string;
  lastName: string;
  mail: string;
  password: string;
  terms: boolean;
  confirmed: boolean | null;
  refreshToken: string | null;


  constructor(obj: UserRecord) {

    const { id, firstName, lastName, mail, password, terms, confirmed, refreshToken } = obj;

    this.id = id ?? uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.mail = mail;
    this.password = password;
    this.terms = Boolean(terms);
    this.confirmed = Boolean(confirmed) ?? false;
    this.refreshToken = refreshToken ?? null;
  }
}