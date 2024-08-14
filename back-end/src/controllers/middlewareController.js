const jwt = require("jsonwebtoken");

const middlewareController = {
  updateUserMiddleware: async (req, res, next) => {
    if (req.body.email) {
      res.status(400).json({
        DT: "",
        EC: 1,
        EM: "Can not update email",
      });
    }
    next();
  },
  verifyToken: async (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
      const access_token = token.split(" ")[1];
      jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY, (error, user) => {
        if (error) {
          return res.status(403).json({
            DT: "",
            EC: -999,
            EM: "Token is not valid",
          });
        }
        req.user = user.payload;
        next();
      });
    } else
      res.status(401).json({
        DT: "",
        EC: -999,
        EM: "You are not authenticated",
      });
  },
  verifyTokenAndIsAdmin: async (req, res, next) => {
    middlewareController.verifyToken(req, res, () => {
      if (req.user.id === req.params.id || req.user.isAdmin) {
        next();
      } else {
        return res.status(403).json({
          DT: "",
          EC: -999,
          EM: "Access forbidden",
        });
      }
    });
  },
};

module.exports = middlewareController;
