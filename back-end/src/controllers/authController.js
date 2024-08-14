const REG =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const {
  generateRefreshToken,
  generateAccessToken,
} = require("@utils/JwtServices");
const UserModel = require("@models/UserModel");
const UserService = require("@services/userService");

let refreshStore = [];

const authController = {
  registerUser: async (req, res) => {
    try {
      const { email, name, password, confirm_password, phone } = req.body;
      // validate input
      const isValidEmail = REG.test(email);
      if (!isValidEmail) {
        return res.status(400).json({
          DT: "",
          EC: 1,
          EM: "Invalid Email",
        });
      }
      if (!email || !name || !password || !confirm_password || !phone) {
        return res.status(400).json({
          DT: "",
          EC: "1",
          EM: "Input Required",
        });
      }
      if (password !== confirm_password) {
        return res.status(400).json({
          DT: "",
          EC: "1",
          EM: "Password not match",
        });
      }
      //hash password
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(password, salt);
      //   create user obj
      const newUser = await new UserModel({
        ...{
          name: name,
          email: email,
          password: hashed,
          phone: phone,
        },
      });
      //call create user service
      const respond = await UserService.createUser(newUser);
      if (respond) {
        return res.status(200).json(respond);
      }
    } catch (error) {
      return res.status(500).json({
        DT: "",
        EC: -1,
        EM: error.message,
      });
    }
  },
  loginUser: async (req, res) => {
    try {
      const { email, password } = req.body;
      //   validate input
      const isValidEmail = REG.test(email);
      if (!isValidEmail) {
        return res.status(400).json({
          DT: "",
          EC: 1,
          EM: "Invalid Email",
        });
      }
      if (!email || !password) {
        return res.status(400).json({
          DT: "",
          EC: "1",
          EM: "Input Required",
        });
      }
      //  call user service
      const respond = await UserService.loginUser({ email, password });
      if (respond) {
        const refresh_token = await generateRefreshToken({
          id: respond.DT._id,
          isAdmin: respond.DT.isAdmin,
        });
        res.cookie("refresh_token", refresh_token, {
          secure: false,
          httpOnly: true,
          sameSite: "strict" /** prevent csrf  **/,
        });
        // store refresh token
        refreshStore.push(refresh_token);
        return res.status(200).json(respond);
      }
    } catch (error) {
      return res.status(500).json({
        DT: "",
        EC: -1,
        EM: error.message,
      });
    }
  },
  refreshToken: async (req, res) => {
    const refreshToken = req.headers.cookie;
    const refresh_token = refreshToken.split("=")[1];
    if (!refreshStore.includes(refresh_token)) {
      return res.status(403).json({
        DT: "",
        EC: -999,
        EM: "Refresh token is not valid",
      });
    }
    if (!refresh_token) {
      return res.status(401).json({
        DT: "",
        EC: -999,
        EM: "You are not authenticated",
      });
    }
    // verify token
    jwt.verify(
      refresh_token,
      process.env.REFRESH_TOKEN_KEY,
      (error, respond) => {
        if (error) {
          return res.status(403).json({
            DT: "",
            EC: -999,
            EM: "Access forbidden",
          });
        }
        const user = respond.payload;
        const newAccessToken = generateAccessToken({
          id: user.id,
          isAdmin: user.isAdmin,
        });
        const newRefreshToken = generateRefreshToken({
          id: user.id,
          isAdmin: user.isAdmin,
        });
        // all new refresh token
        refreshStore.push(newRefreshToken);
        // remove old token
        refreshStore = refreshStore.filter((token) => token !== refresh_token);
        // store token in cookie
        res.cookie("refresh_token", newRefreshToken, {
          secure: false,
          httpOnly: true,
          sameSite: "strict" /** prevent csrf  **/,
        });
        return res.status(200).json({
          DT: newAccessToken,
          EC: 0,
          EM: "Get new access token succeed",
        });
      }
    );
  },
  logoutUser: async (req, res) => {
    const refreshToken = req.headers.cookie;
    if (refreshToken) {
      const refresh_token = refreshToken.split("=")[1];
      refreshStore = refreshStore.filter((token) => token !== refresh_token);
      res.clearCookie("refresh_token");
      return res.status(200).json({
        DT: "",
        EC: 0,
        EM: "Logout succeed",
      });
    } else
      return res.status(500).json({
        DT: "",
        EC: -1,
        EM: "Internal Server Error",
      });
  },
};

module.exports = authController;
