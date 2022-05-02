import { Router } from "express";
import { v4 as uuid } from "uuid";
import { UserRecord } from "../records/user.record";
import { UserRepository } from "../records/UserRepository";
import { createRefreshToken, encryptText } from "../utils/secure";


export const registerRouter = Router();

registerRouter
  .get('/', (req, res) => {

  })

  .post('/', async (req, res) => {

    if (await UserRepository.findOne(req.body.mail)) {
      const message = `User with mail: ${req.body.mail} has just existed in Organisation.`
      res.json({
        message
      });
    }
    else {

      const { firstName, lastName, mail, password, terms } = req.body;

      const passwordHash = await encryptText(password);
      const refreshToken = await createRefreshToken({
        mail,
        passwordHash
      })

      const newUser = new UserRecord({
        id: uuid(),
        firstName,
        lastName,
        mail,
        password: passwordHash,
        refreshToken,
        sessionToken: null,
        terms: Boolean(terms)
      })

      const userId = await UserRepository.createUser(newUser);

      res.json(userId);
    }
  })