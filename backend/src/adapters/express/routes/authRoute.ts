import { Router, Request, Response } from "express";
import AuthUseCase from "../../../application/usecases/authUseCase";

const authRouter = Router();

const authUseCase = new AuthUseCase();

authRouter.post("/google", (req: Request, res: Response) => {
  authUseCase.googleLogin(req, res);
});

export { authRouter };
