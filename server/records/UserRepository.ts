import { v4 as uuid } from "uuid";
import { UserRecordResults } from "../types";
import { pool } from "../utils/db";
import { UserRecord } from "./user.record";


export class UserRepository {

  static checkRecord(record) {
    if (!(record instanceof UserRecord)) {
      throw new Error('Record must be an instance of UserRecord')
    }
  }

  static async createUser(record: UserRecord): Promise<string> {
    record.id = record.id ?? uuid();

    await pool.execute('INSERT INTO `registration` VALUES (:id, :firstName, :lastName, :mail, :password, :terms, :refreshToken, :sessionToken)', {
      id: record.id,
      firstName: record.firstName,
      lastName: record.lastName,
      mail: record.mail,
      password: record.password,
      terms: record.terms,
      refreshToken: record.refreshToken,
      sessionToken: record.sessionToken,
    })

    return record.id
  }

  static async findOne(mail: string) {
    const [result] = await pool.execute('SELECT * FROM `registration` WHERE `mail`=:mail', {
      mail
    }) as UserRecordResults

    return result.length === 0 ? null : new UserRecord(result[0])
  }




}