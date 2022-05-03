import { Router } from "express";
import { UserRepository } from "../records/UserRepository";
import { UserLogInRes } from "../types";
import { compareText, createRefreshToken, createSessionToken } from "../utils/secure";

export const loginRouter = Router()

loginRouter
  .post('/', async (req, res) => {

    const mail = String(req.body.mail);
    const password = String(req.body.password);

    const user = await UserRepository.findOneByMail(mail);

    if (!user) {
      return res
        .json({
          message: 'Sorry, but we\'re having trouble signing you. No reply address is registered for the application. '
        })
        .status(404)
    }

    if (!user.confirmed) {
      return res
        .json({
          message: 'Before signin look for an E-mail from GPT-3 and confirm your registration.'
        })
        .status(401)
    }

    const isPasswordMatch = await compareText(password, String(user.password));

    if (!isPasswordMatch) {
      return res
        .json({
          message: 'Incorrect e-mail or password. '
        })
        .status(401)
    }

    const refreshToken = await createRefreshToken
      ({
        mail,
        firstName: user.firstName
      })

    let sessionToken = await createSessionToken({ id: user.id, mail, firstName: user.firstName });

    await UserRepository.updateRefreshToken(user.id, refreshToken);


    res.json({
      id: user.id,
      sessionToken,
      refreshToken,
      message: 'Sigin succesfull!'
    }) as unknown as UserLogInRes

    res.status(200)




  })