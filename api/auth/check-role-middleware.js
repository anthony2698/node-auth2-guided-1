module.exports = (role) => (req, res, next) => {
  if (req.decodedToken.role === 'admin') {
    next()
  } else {
    res.status(403).json('you have no power here')
  }
}
