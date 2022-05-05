import { Router } from "express";
import { UserRepository } from "../records/UserRepository";
import { UserLogInRes } from "../types";



export const accountRouter = Router()


  .post('/registration/confirmed/:id', async (req, res) => {

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

  .post('/reset/password/email/', async (req, res) => {

    const mail = String(req.query.mail);

    if (!req.query.mail) {
      return res
        .json({
          message: `Sorry, invalid request `
        })
        .status(404)
    }

    const user = await UserRepository.findOneByMail(mail);

    if (!user) {
      return res
        .json({
          message: `Sorry, not found user e-mail: ${mail} `
        })
        .status(404)
    }

    return res
      .json({
        message: `Check your e-mail box! Look for an E-mail from GPT-3 to reset your password. `
      })
      .status(200)


  })