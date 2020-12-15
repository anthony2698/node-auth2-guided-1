const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  // pull the token from header
  const token = req.headers.authorization

  if (!token) {
    res.status(401).json('we wants token')
  } else {
    // check it with jwt (async form verify)
    jwt.verify(token, 'foo', (err, decoded) => {
      if (err) {
        res.status(401).json('we wants GOOD token: ' + err.message)
      } else {
        // tack the token to req 
        req.decodedToken = decoded
        next()
      }
    })
  }
};
