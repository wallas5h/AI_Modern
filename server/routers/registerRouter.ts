import { Router } from "express";
import { v4 as uuid } from "uuid";
import { UserRecord } from "../records/user.record";
import { UserRepository } from "../records/UserRepository";
import { UserLogInRes, UserRegisterRes } from "../types";
import { encryptText } from "../utils/secure";


export const registerRouter = Router();

registerRouter
  .get('/', (req, res) => {

  })

  .post('/', async (req, res) => {

    if (await UserRepository.findOneByMail(req.body.mail)) {

      const message = `User with e-mail: ${req.body.mail} has just existed in GPT-3.`
      res.json({ message });

    }
    else {
      const firstName = String(req.body.firstName);
      const lastName = String(req.body.lastName);
      const mail = String(req.body.mail);
      const password = String(req.body.password);
      const terms = Boolean(req.body.terms);

      const passwordHash = await encryptText(password);

      const newUser = new UserRecord({
        id: uuid(),
        firstName,
        lastName,
        mail,
        password: passwordHash,
        refreshToken: null,
        confirmed: false,  //true for tests, it should be null, value true after mail confirm.
        terms
      })

      const userId = await UserRepository.createUser(newUser);

      res.json({
        id: userId,
        message: 'Thank you for registration! Look for an E-mail from GPT-3 to confirm your registration.'
      }) as UserRegisterRes;
    }
  })

  .post('/user/registration/confirmed/:id', async (req, res) => {

    const id = String(req.params.id);

    const user = await UserRepository.findOneById(id);



    if (user) {
      await UserRepository.updateConfirmedData(id);
      res.json({
        id: user.id,
        message: 'Registration confirmed!'
      }) as UserLogInRes

      res.status(200)
    }
    else {
      return res
        .json({
          message: `Sorry, not found user id: ${id} `
        })
        .status(404)
    }



  })