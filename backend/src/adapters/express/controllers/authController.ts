import { Request, Response } from "express";
import AuthUseCase from "../../../application/usecases/authUseCase";
import UserRepository from "../../../domain/repositories/userRepositories";

const userRepository = new UserRepository();
const authUseCase = new AuthUseCase(userRepository);

export const googleLogin = (req: Request, res: Response): void => {
  authUseCase.googleLogin(req, res);
};
