import { Request, Response } from "express";
import UserRepository from "../../domain/repositories/userRepositories";
import { UserModel } from "../../domain/models/User";
import { UserDocument } from "../../infrastructure/database/models/userModel";
import jwt from "jsonwebtoken";

class AuthUseCase {
  private userRepository: UserRepository;

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  private createJwtToken(userId: string): string {
    return jwt.sign({ userId }, process.env.SECRET_KEY || "message", {
      expiresIn: "7d",
    });
  }

  public async googleLogin(req: Request, res: Response): Promise<void> {
    const { given_name, email, picture }: UserModel = req.body;

    const userData: UserModel = {
      given_name,
      email,
      picture,
    };

    try {
      const existingUser = await this.userRepository.findByEmail(email);
      if (existingUser) {
        const token = this.createJwtToken(existingUser._id);
        res.status(200).json({ message: "Login successful", token });
      } else {
        const savedUser = await this.userRepository.save(
          userData as UserDocument
        );
        const token = this.createJwtToken(savedUser._id);
        res.status(200).json({ message: "Data saved successfully", token });
      }
    } catch (error) {
      console.error("Error saving Data");
      res.status(500).json({ message: "Error saving" });
    }
  }
}

export default AuthUseCase;
