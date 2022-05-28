require('dotenv').config();
import cors from 'cors';
import express, { Router } from "express";
import "express-async-errors";
import rateLimit from 'express-rate-limit';
import { config } from './config/config';
import { accountRouter } from './routers/accountRouter';
import { homeRouter } from './routers/homeRouter';
import { loginRouter } from './routers/loginRouter';
import { logoutRouter } from './routers/logoutRouter';
import { registerRouter } from './routers/registerRouter';
import './utils/db';
import { handleError } from './utils/errors';

const { PORT = 3001 } = process.env;

const corsOptions = {
  origin: config.corsOrigin,
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

//routing

const router = Router();

router.use('/', homeRouter);
router.use('/login', loginRouter);
router.use('/logout', logoutRouter);
router.use('/register', registerRouter);
router.use('/account', accountRouter);

app.use('/api', router);


app.get('/api/terms', (req, res) => {
  res.send('Terms of service. Coming soon.')
});

app.use(handleError);

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', config.corsOrigin,);
  next();
});


app.listen(3001, '0.0.0.0', () => {
  console.log('server started at http://localhost:' + PORT);
});