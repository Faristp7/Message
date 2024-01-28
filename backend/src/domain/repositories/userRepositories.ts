import UserModel, {
  UserDocument,
} from "../../infrastructure/database/models/userModel";

class UserRepository {
  public async save(user: UserDocument): Promise<UserDocument> {
    try {
      const newUser = new UserModel(user);
      const savedUser = await newUser.save();
      return savedUser
    } catch (error) {
      console.error("Error saving user to the database", error);
      throw error;
    }
  }

  public async findByEmail(email : string) : Promise<UserDocument | null>{
    try {
      const user = await UserModel.findOne({email})      
      return user
    } catch (error) {
      console.error("Error finding user by email", error);
      throw error
    }
  }
}

export default UserRepository;
