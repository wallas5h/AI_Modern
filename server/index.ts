require('dotenv').config();
import * as cors from 'cors';
import * as express from "express";
import { homeRouter } from './routers/homeRouter';

const { PORT = 3001 } = process.env;
const app = express();




app.use('/', homeRouter)


app.use(cors({
  origin: 'http://localhost:3000'
}))




app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT);
});