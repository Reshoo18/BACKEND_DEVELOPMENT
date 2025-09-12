import { serialize } from 'bson';
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: ture,
    },
    password: {
      type: String,
      required: [true],
    },
  },
  { timeseries: true }
);

export const User = mongoose.model('User', userSchema);
