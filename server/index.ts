require('dotenv').config();
import cors from 'cors';
import express from "express";
import "express-async-errors";
import rateLimit from 'express-rate-limit';
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

const limiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 100,
})



const app = express();

app.use(cors(corsOptions));

app.use(limiter);

app.use(express.json());

app.use('/', homeRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/account', accountRouter);

app.get('/terms', (req, res) => {
  res.send('terms of service')
});

app.use(handleError);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});


app.listen(3001, '0.0.0.0', () => {
  console.log('server started at http://localhost:' + PORT);
});