import mongoose ,{Document, Schema} from "mongoose";

export interface UserDocument extends Document {
  email : string;
  given_name : string;
  picture? : string;
}

const userSchema = new Schema<UserDocument>({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  given_name: {
    type: String,
    required: true,
    trim: true,
  },
  picture: {
    type: String,
  },
});

const UserModel = mongoose.model<UserDocument>("User", userSchema);
export default UserModel;
