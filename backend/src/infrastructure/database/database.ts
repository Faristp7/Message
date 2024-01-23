import mongoose from "mongoose";

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017/messageBackup";

function connectToDatabase() {
  mongoose.set("strictQuery", true);
  mongoose
    .connect(DATABASE_URL)
    .then(() => console.log("database connected"))
    .catch((err) => console.error(err));
}

export default connectToDatabase;
