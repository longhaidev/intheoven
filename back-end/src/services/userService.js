const UserModel = require("@models/UserModel");
const bcrypt = require("bcrypt");
const {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
} = require("@utils/JwtServices");

// Create a new user
const createUser = async (newUser) => {
  try {
    // Check if user already exists
    const existingUser = await UserModel.findOne({ email: newUser.email });
    if (existingUser) {
      return {
        DT: "",
        EC: 1,
        EM: `User with email ${existingUser.email} already exists`,
      };
    }

    // Hash the password and create the user
    const hashedPassword = bcrypt.hashSync(newUser.password, 10);
    const user = await UserModel.create({
      ...newUser,
      password: hashedPassword,
    });

    return {
      DT: user,
      EC: 0,
      EM: "User created successfully",
    };
  } catch (err) {
    console.error("Error creating user:", err.message);
    throw new Error("Error creating user");
  }
};

// Log in a user
const doLoginUser = async (loginUser) => {
  try {
    // Find the user
    const user = await UserModel.findOne({ email: loginUser.email });
    if (!user) {
      return {
        DT: "",
        EC: 1,
        EM: "User does not exist",
      };
    }

    // Check if the password is correct
    const isPasswordCorrect = bcrypt.compareSync(
      loginUser.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return {
        DT: "",
        EC: 1,
        EM: "Incorrect password",
      };
    }

    // Generate tokens
    const accessToken = await generateAccessToken({
      id: user.id,
      isAdmin: user.isAdmin,
    });
    const refreshToken = await generateRefreshToken({ id: user.id });

    return {
      DT: {
        ...user._doc,
        access_token: accessToken,
        refresh_token: refreshToken,
      },
      EC: 0,
      EM: "Login successful",
    };
  } catch (err) {
    console.error("Error logging in user:", err.message);
    throw new Error("Error logging in user");
  }
};

// Update a user's details
const doUpdateUser = async (userId, updateData, accessToken) => {
  try {
    // Verify the token
    const isAuthorized = await verifyToken({
      access_token: accessToken,
      userId,
    });
    if (!isAuthorized) {
      return {
        DT: "",
        EC: 1,
        EM: "Unauthorized",
      };
    }

    // Find and update the user
    const user = await UserModel.findById(userId);
    if (!user) {
      return {
        DT: "",
        EC: 1,
        EM: "User not found",
      };
    }

    const updatedUser = await UserModel.findByIdAndUpdate(userId, updateData, {
      new: true,
    });
    return {
      DT: updatedUser,
      EC: 0,
      EM: "User updated successfully",
    };
  } catch (err) {
    console.error("Error updating user:", err.message);
    throw new Error("Error updating user");
  }
};

module.exports = {
  createUser,
  doLoginUser,
  doUpdateUser,
};
