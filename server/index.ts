require('dotenv').config();
import * as cors from 'cors';
import * as express from "express";
import "express-async-errors";
import { homeRouter } from './routers/homeRouter';
import { loginRouter } from './routers/loginRouter';
import './utils/db';
import { handleError } from './utils/errors';

const { PORT = 3001 } = process.env;
const app = express();


app.use(express.json())

app.use('/', homeRouter);
app.use('/login', loginRouter)

app.get('/terms', (req, res) => {
  res.send('terms of service')
})

app.use(handleError);


app.use(cors({
  origin: 'http://localhost:3000'
}))




app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT);
});