import { User } from "../Models/Users.Model.js";

const registerUser = async (req, res) => {
    try {
        // Getting user details
        const { name, email, mobile, password } = req.body;
        console.log(name, email, mobile, password);

        // validating required fields
        if (
            [name, email, password].some((field) => !field?.trim()) ||
            !mobile || mobile.toString().trim() === ""
        ) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Check if user or email already exist or not
        const existingUsername = await User.findOne({ username: name.toLowerCase() });
        if (existingUsername) {
            return res.status(400).json({ error: "Username already exists. Please use another." });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: "Email already exists. Please use another." });
        }

        // Create new user in Database
        const user = await User.create({
            username: name,      // ya name.toLowerCase()
            email,
            number: mobile,      // frontend se mobile, model me number
            password,
        });

        // Return created user (excluding password, refreshToken)
        const createdUser = await User.findById(user._id).select("-password -refreshToken");

        if (!createdUser) {
            return res.status(500).json({
                error: "User not created. Server issue"
            });
        }

        return res.status(201).json({
            message: "User registered successfully",
            user: createdUser
        });

    } catch (error) {
        console.error("Register Error", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

export default registerUser;