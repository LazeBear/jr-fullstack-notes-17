const DocumentNotFoundError = require('../../../errors/DocumentNotFoundError');

module.exports = (error, req, res, next) => {
  if (error instanceof DocumentNotFoundError) {
    res.status(404).json({ error: error.message });
    return;
  }
  next(error);
};
