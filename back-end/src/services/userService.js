const UserModel = require("@models/UserModel");
const bcrypt = require("bcrypt");
const {
  generateAccessToken,
  generateRefreshToken,
} = require("@utils/JwtServices");

const userService = {
  createUser: async (newUser) => {
    try {
      // is exist user ?
      const isExistUser = await UserModel.findOne({ email: newUser.email });
      if (isExistUser) {
        return {
          DT: "",
          EC: 1,
          EM: `User with email ${isExistUser.email} already exists`,
        };
      }
      // save new user to db
      const respond = await UserModel.create(newUser);
      if (respond) {
        return {
          DT: respond,
          EC: 0,
          EM: "User created successfully",
        };
      }
    } catch (error) {
      return {
        DT: "",
        EC: -1,
        EM: error.message,
      };
    }
  },
  loginUser: async (loginUser) => {
    try {
      // check is exist user
      const user = await UserModel.findOne({ email: loginUser.email });
      if (!user) {
        return {
          DT: "0",
          EC: 1,
          EM: `User with email ${email} is not found`,
        };
      }
      // is valid password ?
      const isValidPassword = bcrypt.compareSync(
        loginUser.password,
        user.password
      );
      if (!isValidPassword) {
        return {
          DT: "",
          EC: 1,
          EM: "Wrong email or password",
        };
      }
      // access login
      if (user && isValidPassword) {
        const access_token = await generateAccessToken({
          id: user.id,
          isAdmin: user.isAdmin,
        });
        const { password, ...orther } = user._doc;
        return {
          DT: {
            ...orther,
            access_token,
          },
          EC: 0,
          EM: "Login succeed",
        };
      }
    } catch (error) {
      return {
        DT: "",
        EC: -1,
        EM: error.message,
      };
    }
  },
  getAllUser: async () => {
    try {
      const listUser = await UserModel.find();
      if (listUser) {
        return {
          DT: listUser,
          EC: 0,
          EM: "Get all user succeed",
        };
      }
    } catch (error) {
      return {
        DT: "",
        EC: -1,
        EM: error.message,
      };
    }
  },
  deleteUser: async (userId) => {
    try {
      const existUser = await UserModel.findById(userId);
      if (existUser) {
        return {
          DT: existUser,
          EC: 0,
          EM: "Delete succeed",
        };
      }
      return {
        DT: "",
        EC: 1,
        EM: "User not exist",
      };
    } catch (error) {
      return {
        DT: "",
        EC: -1,
        EM: error.message,
      };
    }
  },
};
module.exports = userService;
