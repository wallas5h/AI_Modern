import { FieldPacket } from "mysql2";
import { UserRecord } from "../../records/user.record";

export type UserRecordResults = [UserRecord[], FieldPacket[]];

export interface UserRegister {
  id?: string
  firstName: string
  lastName: string
  mail: string
  password: string
  terms: boolean
}

export type UserRegisterReq = Omit<UserRegister, 'id'>

export interface UserRegisterRes {
  id?: string
  message?: string
}

export interface UserLog {
  id: string
  mail: string
  password: string
}

export type UserLogInReq = Omit<UserLog, 'id'>
export type UserResetPasswordReq = Omit<UserLog, 'id' | 'password'>

export interface UserLogInRes {
  id?: string | null
  sessionToken?: string | null
  refreshToken?: string | null
  message?: string
}