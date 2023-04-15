import { Request, Response, NextFunction } from "express";
import Users from "../models/userModel";
import responseMessage from "../utils/responseMessage";
import { createToken } from "../utils/token";
import IUsers from "../interfaces/userInterfaces";
import bcrypt from "bcryptjs";

async function login(req: Request, res: Response) {
  try {
    console.log(req.body.email);

    const user = await Users.findOne({
      email: req.body.email,
    });

    if (user) {
      return res
        .status(200)
        .json({ message: "Bienvenido", accessToken: createToken(user) });
    }
    return res.status(404).json({ message: "El usuario no existe" });
  } catch (error) {
    return res.status(500).json(responseMessage.errorServer);
  }
}

async function addUser(req: Request, res: Response, next: NextFunction) {
  try {
    req.body.password = await bcrypt.hash(req.body.password, 15);
    const user = req.body;
    const newUser: IUsers = new Users(user);
    await newUser.save();
    return res.status(200).json(responseMessage.addSuccess);
  } catch (error) {
    console.log(error);
    return res.status(200).json(responseMessage.errorServer);
  }
}
async function getUser(req: Request, res: Response, next: NextFunction) {
  console.log(req);
  try {
    const user = await Users.findById({ _id: req.params.id });
    res.status(200).json(user);
  } catch (error) {
    return res.json({
      message: error,
    });
  }
}
async function addPokemon(req: Request, res: Response, next: NextFunction) {
  try {
    console.log(req.body.pokeID);
    await Users.findOneAndUpdate(
      {
        _id: req.params._id,
      },
      {
        $push: { pokeID: req.body.pokeID },
      }
    );
    return res.status(200).json(responseMessage.addSuccess);
  } catch (error) {
    console.log(error);
    return res.status(500).json(responseMessage.errorServer);
  }
}

export default {
  login,
  addUser,
  getUser,
  addPokemon,
};
