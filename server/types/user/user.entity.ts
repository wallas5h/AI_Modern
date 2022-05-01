import { ObjectId } from "mongodb"

export interface UserRegister {
  _id?: ObjectId
  firstName: string
  lastName: string
  mail: string
  password: string
  terms: boolean
}

export type UserRegisterReq = Omit<UserRegister, '_id'>

export interface UserRegisterRes {
  mail: string
}

export interface UserLog {
  _id: ObjectId
  mail: string
  password: string
}

export type UserLogInReq = Omit<UserLog, '_id'>

export interface UserLogInRes {
  _id: ObjectId | null
  mail: string | null
}