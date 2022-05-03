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

  .post('/reset/password/email/:mail', (req, res) => {

  })