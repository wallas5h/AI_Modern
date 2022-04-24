import { ObjectId } from "mongodb"


export interface UserEntity {
  _id?: ObjectId
  firstName: string
  lastName: string
  mail: string
  phone: string
}