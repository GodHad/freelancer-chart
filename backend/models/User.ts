import mongoose, { Schema, Document } from "mongoose";
import bcrypt from "bcrypt";

interface User extends Document {
  username: string;
  email: string;
  password: string;
  createdAt: Date;
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

UserSchema.pre<User>("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});

export default mongoose.model<User>("User", UserSchema);
