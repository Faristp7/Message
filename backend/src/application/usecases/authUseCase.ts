import { Request ,Response } from "express";

class AuthUseCase{
    public googleLogin(req : Request, res : Response): void{
        console.log(req.body);
        res.status(200).json({message : "hello"})
    }
}

export default AuthUseCase