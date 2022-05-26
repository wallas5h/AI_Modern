import { Router } from "express";
import { v4 as uuid } from "uuid";
import { UserRecord } from "../records/user.record";
import { UserRepository } from "../records/UserRepository";
import { UserRegisterRes } from "../types";
import { encryptText } from "../utils/secure";
import { singupValidation } from "../utils/validation";


export const registerRouter = Router();

registerRouter
  .get('/', (req, res) => {

  })

  .post('/', async (req, res) => {

    const firstName = String(req.body.firstName);
    const lastName = String(req.body.lastName);
    const mail = String(req.body.mail);
    const password = String(req.body.password);
    const terms = Boolean(req.body.terms);

    const validation = singupValidation({ firstName, lastName, mail, password, terms })

    if (!validation.correct) {
      return res
        .json({
          message: 'Sending data do not meet the requirements'
        })
        .status(404)

    }

    if (await UserRepository.findOneByMail(mail)) {

      const message = `User with e-mail: ${req.body.mail} has just existed in GPT-3.`
      return res.json({ message });
    }

    const passwordHash = await encryptText(password);

    const newUser = new UserRecord({
      id: uuid(),
      firstName,
      lastName,
      mail,
      password: passwordHash,
      refreshToken: null,
      confirmed: true,  //@TODO change to false after use Spring Boot Email
      terms
    })

    const userId = await UserRepository.createUser(newUser);

    res.json({
      id: userId,
      message: 'Thank you for registration! Look for an E-mail from GPT-3 to confirm your registration. ( ** This is coming soon, now login without email confirmation **)'
    }) as UserRegisterRes;

  })
