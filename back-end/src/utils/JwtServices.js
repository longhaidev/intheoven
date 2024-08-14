const jwt = require("jsonwebtoken");

const generateAccessToken = (payload) => {
  const access_token = jwt.sign(
    {
      payload,
    },
    process.env.ACCESS_TOKEN_KEY,
    { expiresIn: "30s" }
  );
  return access_token;
};

const generateRefreshToken = (payload) => {
  const refresh_token = jwt.sign(
    {
      payload,
    },
    process.env.REFRESH_TOKEN_KEY,
    { expiresIn: "3d" }
  );
  return refresh_token;
};

const verifyToken = ({ access_token, userId }) => {
  try {
    const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY);
    if (decoded.payload.id !== userId) {
      return null;
    }
    return decoded.payload.id;
  } catch (err) {
    return null;
  }
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
};
