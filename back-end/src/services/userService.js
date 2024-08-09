const UserModel = require("../models/UserModel");
const bcrypt = require("bcrypt");
const generateAccessToken = require("./JwtServices");
const generateRefreshToken = require("./JwtServices");
// main
const createUser = (newUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      //   check exist user
      const isExistUser = await UserModel.findOne({
        email: newUser.email,
      });
      if (isExistUser !== null) {
        resolve({
          DT: "",
          EC: 1,
          EM: `User with email ${isExistUser?.email} is already exist`,
        });
      }
      const hashPassword = await bcrypt.hashSync(newUser.password, 10);
      const res = await UserModel.create({
        ...newUser,
        password: hashPassword,
      });
      if (res) {
        resolve({
          DT: res,
          EC: 0,
          EM: "Create new user successfully",
        });
      }
    } catch (err) {
      reject(err);
    }
  });
};

const doLoginUser = (loginUser) => {
  return new Promise(async (resolve, reject) => {
    try {
      //  verifile login user
      const existUser = await UserModel.findOne({
        email: loginUser.email,
      });
      if (!existUser) {
        resolve({
          DT: "",
          EC: 1,
          EM: "User is not exist",
        });
      }
      const isCorrectPassword = bcrypt.compareSync(
        loginUser.password,
        existUser.password
      );
      if (!isCorrectPassword) {
        resolve({
          DT: "",
          EC: 1,
          EM: "Password or email is incorrect",
        });
      }
      const access_token = await generateAccessToken({
        id: existUser.id,
        isAdmin: existUser.isAdmin,
        secret: process.env.ACCESS_TOKEN_KEY,
      });
      const refresh_token = await generateRefreshToken({
        id: existUser.id,
        secret: process.env.REFRESH_TOKEN_KEY,
      });

      resolve({
        DT: { ...existUser._doc, refresh_token, access_token },
        EC: 0,
        EM: "Login succeed",
      });
    } catch (err) {
      reject(err);
    }
  });
};
module.exports = {
  createUser,
  doLoginUser,
};
