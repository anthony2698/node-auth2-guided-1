const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  // pull the token from header
  // verify it
  const token = req.headers.authorization

  if (!token) {
    res.status(401).json('we wants token')
  } else {
    // check it with jwt
  }
};
