const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "gjhkgkjhgjkghjghjkghjkgjklll", {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
