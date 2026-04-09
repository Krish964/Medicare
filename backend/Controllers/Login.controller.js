import { User } from "../Models/Users.Model.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
console.log(email , password)
    if (!email?.trim() || !password?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const user = await User.findOne({ email: email.trim() });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const accessToken = user.generateAccessTokens();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return res.status(200).json({
      success: true,
      message: "Login successful 🎉",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
        isAdmin: false,
      },
      accessToken,
      refreshToken,
    });
  } catch (error) {
    console.error("Error during login:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error. Please try again later.",
    });
  }
};