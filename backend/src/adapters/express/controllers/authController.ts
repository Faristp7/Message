import { Request , Response } from "express";
import AuthUseCase from "../../../application/usecases/authUseCase";

const authUseCase = new AuthUseCase()

export const googleLogin = (req : Request , res : Response): void => {
    authUseCase.googleLogin(req,res)
}