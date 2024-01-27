import { Request, Response } from "express";
import UserRepository from "../../domain/repositories/userRepositories";
import { UserModel } from "../../domain/models/User";
import { UserDocument } from "../../infrastructure/database/models/userModel";

class AuthUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  public async googleLogin(req: Request, res: Response): Promise<void> {
    const { given_name, email, picture } = req.body;

    const userData: UserModel = {
      given_name,
      email,
      picture,
    };

    try {
      await this.userRepository.save(userData as UserDocument);
      res.status(200).json({ message: "Data saved successfully" });
    } catch (error) {
      console.error("Error saving Data");
      res.status(500).json({ message: "Error saving"})
    }
  }
}

export default AuthUseCase;
