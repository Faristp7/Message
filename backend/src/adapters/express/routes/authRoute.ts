import { Router } from "express";
import AuthUseCase from "../../../application/usecases/authUseCase";

const authRouter = Router();
const authUseCase = new AuthUseCase();

authRouter.get("/google", (req, res) => authUseCase.googleLogin(req, res));

export { authRouter };