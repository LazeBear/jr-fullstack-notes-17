module.exports = (error, req, res, next) => {
  if (error.name === 'JsonWebTokenError') {
    res.status(401).json({ error: 'invalid token' });
    return;
  }
  next(error);
};
