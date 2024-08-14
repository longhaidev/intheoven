const userService = require("@services/userService");
const userController = {
  getAllUser: async (req, res) => {
    try {
      const respond = await userService.getAllUser();
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
  deleteUser: async (req, res) => {
    try {
      const userDeleteId = req.params.id;
      if (userDeleteId) {
        const respond = await userService.deleteUser(userDeleteId);
        if (respond) {
          return res.status(200).json(respond);
        }
      }
    } catch (error) {
      return res.status(500).json({
        DT: "",
        EC: -1,
        EM: error.message,
      });
    }
  },
};

module.exports = userController;
