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

    await pool.execute('INSERT INTO `registration`(`id`, `firstName`, `lastName`, `mail`, `password`, `terms`, `confirmed`, `refreshToken`) VALUES (:id, :firstName, :lastName, :mail, :password, :terms, :confirmed, :refreshToken)', {
      id: record.id,
      firstName: record.firstName,
      lastName: record.lastName,
      mail: record.mail,
      password: record.password,
      terms: record.terms,
      confirmed: record.confirmed,
      refreshToken: record.refreshToken,
    })

    return record.id
  }

  static async findOneByMail(mail: string): Promise<UserRecord | null> {
    const [result] = await pool.execute('SELECT * FROM `registration` WHERE `mail`=:mail', {
      mail
    }) as UserRecordResults

    return result.length === 0 ? null : new UserRecord(result[0])
  }

  static async findOneById(id: string): Promise<UserRecord | null> {
    const [result] = await pool.execute('SELECT * FROM `registration` WHERE `id`=:id', {
      id
    }) as UserRecordResults

    return result.length === 0 ? null : new UserRecord(result[0])
  }

  static async updateRefreshToken(id: string, token: string | null) {

    await pool.execute('UPDATE `registration` SET `refreshToken`=:token WHERE `id`=:id', {
      id,
      token
    })

  }

  static async updateConfirmedData(id: string) {

    await pool.execute('UPDATE `registration` SET `confirmed`=1 WHERE `id`=:id', {
      id,
    })

  }




}