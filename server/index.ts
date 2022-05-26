require('dotenv').config();
import cors from 'cors';
import express from "express";
import "express-async-errors";
import { accountRouter } from './routers/accountRouter';
import { homeRouter } from './routers/homeRouter';
import { loginRouter } from './routers/loginRouter';
import { registerRouter } from './routers/registerRouter';
import './utils/db';
import { handleError } from './utils/errors';

const { PORT = 3001 } = process.env;

const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
  optionSuccessStatus: 200,
}


const app = express();

app.use(cors(corsOptions))

app.use(express.json())

app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/account', accountRouter);

app.get('/terms', (req, res) => {
  res.send('terms of service')
})

app.use(handleError);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});


// app.use(cors({
//   origin: 'http://localhost:3000'
// }))




app.listen(PORT, () => {
  console.log('server started at http://localhost:' + PORT);
});