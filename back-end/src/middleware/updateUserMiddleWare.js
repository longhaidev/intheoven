const updateUserMiddleWare = (req, res, next) => {
  if (req.body.email) {
    return res.status(400).json({
      DT: "",
      EC: 1,
      EM: "Can not update email",
    });
  }
  next();
};

module.exports = updateUserMiddleWare;
