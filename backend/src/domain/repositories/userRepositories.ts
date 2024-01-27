import UserModel, {
  UserDocument,
} from "../../infrastructure/database/models/userModel";

class UserRepository {
  public async save(user: UserDocument): Promise<void> {
    try {
      const newUser = new UserModel(user);
      await newUser.save();
    } catch (error) {
      console.error("Error saving user to the database", error);
      throw error;
    }
  }
}

export default UserRepository;
