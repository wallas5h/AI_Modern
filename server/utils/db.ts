import "express-async-errors";
import { createPool } from "mysql2/promise";
// for hosting server
import { config } from "../config/config";


export const pool = createPool({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.dbDatabase,
  namedPlaceholders: true,
  decimalNumbers: true,
})


// for localserver on my computer

// const { HOST, USER_DB, PASSWORD, DATABASE } = process.env

// export const pool = createPool({
//   host: HOST,
//   user: USER_DB,
//   password: PASSWORD,
//   database: DATABASE,
//   namedPlaceholders: true,
//   decimalNumbers: true,
// })




