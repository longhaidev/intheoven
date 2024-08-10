const REG =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const UserService = require("@services/userService");

// return data to user
const createUser = async (req, res) => {
  try {
    const { email, name, password, confirm_password, phone } = req.body;
    const isValidEmail = REG.test(email);
    if (!email || !name || !password || !confirm_password || !phone) {
      return res.status(400).json({
        DT: "",
        EC: "1",
        EM: "Input Required",
      });
    } else if (!isValidEmail) {
      return res.status(400).json({
        EC: "1",
        EM: "Invalid Email",
      });
    } else if (password !== confirm_password) {
      return res.status(400).json({
        EC: "1",
        EM: "Password not match",
      });
    }
    const respond = await UserService.createUser(req.body);
    return res.status(200).json(respond);
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
};

const doLoginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const isValidEmail = REG.test(email);
    if (!email || !password) {
      return res.status(400).json({
        DT: "",
        EC: "1",
        EM: "Input Required",
      });
    } else if (!isValidEmail) {
      return res.status(400).json({
        EC: "1",
        EM: "Invalid Email",
      });
    }
    const respond = await UserService.doLoginUser(req.body);
    return res.status(200).json(respond);
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
};

const doUpdateUser = async (req, res) => {
  try {
    const userId = req?.params.id;
    const authHeader = req.headers["authorization"];
    const access_token = authHeader && authHeader.split(" ")[1];
    const dataUpdate = req?.body;
    if (!userId) {
      return res.status(404).json({
        DT: "",
        EC: 1,
        EM: "User id not found",
      });
    }
    const respond = await UserService.doUpdateUser(
      userId,
      dataUpdate,
      access_token
    );
    return res.status(200).json(respond);
  } catch (err) {
    return res.status(404).json({
      message: err,
    });
  }
};

module.exports = { createUser, doLoginUser, doUpdateUser };
