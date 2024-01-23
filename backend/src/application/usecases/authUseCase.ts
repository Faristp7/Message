import { Request ,Response } from "express";

class AuthUseCase{
    public googleLogin(req : Request, res : Response): void{
        res.status(200).json({message : "hello"})
    }
}

export default AuthUseCase