import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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
    },
    number: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    refreshToken: {
      type: String,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return ;

  this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.isPasswordCorrect = async function (plainPassword) {
  return await bcrypt.compare(plainPassword, this.password);
};

userSchema.methods.generateAccessTokens = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      name: this.username,
    },
    process.env.ACCESS_SECRET_TOKEN,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIERY,
    }
  );
};

userSchema.methods.generateRefreshToken = function () {
  return jwt.sign(
    {
      id: this._id,
    },
    process.env.REFRESH_SECRET_TOKEN,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIERY,
    }
  );
};

export const User = mongoose.model("User", userSchema);