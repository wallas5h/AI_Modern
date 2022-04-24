import { ObjectId } from "mongodb"

export interface NewsletterEntity {
  _id?: ObjectId
  mail: string
}

