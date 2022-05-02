import "express-async-errors";
import { createPool } from "mysql2/promise";

const { HOST, USER, PASSWORD, DATABASE } = process.env


export const pool = createPool({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  namedPlaceholders: true,
  decimalNumbers: true,
})

