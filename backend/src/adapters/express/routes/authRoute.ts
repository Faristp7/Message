import { Router, Request, Response } from "express";
import AuthUseCase from "../../../application/usecases/authUseCase";
import UserRepository from "../../../domain/repositories/userRepositories";

const authRouter = Router();

const userRepository = new UserRepository()
const authUseCase = new AuthUseCase(userRepository);

authRouter.post("/google", (req: Request, res: Response) => {
  authUseCase.googleLogin(req, res);
});

export { authRouter };
