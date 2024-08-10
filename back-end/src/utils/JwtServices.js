const jwt = require("jsonwebtoken");

const generateAccessToken = (payload) => {
  const access_token = jwt.sign(
    {
      payload,
    },
    process.env.ACCESS_TOKEN_KEY,
    { expiresIn: "1h" }
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

const verifyToken = async ({ access_token, userId }) => {
  try {
    const decoded = jwt.verify(access_token, process.env.ACCESS_TOKEN_KEY);
    if (decoded.payload.id !== userId) {
      throw new Error("User ID does not match the token");
    }
    return decoded.payload.id;
  } catch (err) {
    throw new Error("Invalid or expired token");
  }
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
  verifyToken,
};
