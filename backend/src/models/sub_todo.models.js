import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
});

export const User = mongoose.models("user", userSchema)