import { Router } from "express";
import { UserRepository } from "../records/UserRepository";


export const logoutRouter = Router();

logoutRouter
  .delete('/', async (req, res) => {

    const id = String(req.body.id);

    const user = await UserRepository.findOneById(id);

    if (!user) {
      return res.json({
        message: 'Sorry, but we\'re having trouble signout you. Incorrect user\'s id.'
      })
    }

    await UserRepository.updateRefreshToken(user.id, null);

    res.json({
      message: 'Signout succesfull!'
    })
    res.status(200)
  })
