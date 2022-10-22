const documentNotFoundError = require('./documentNotFoundError');
const jwtTokenError = require('./jwtTokenError');
const validationError = require('./validationError');

module.exports = (app) => {
  app.use(validationError);
  app.use(documentNotFoundError);
  app.use(jwtTokenError);
  app.use((error, req, res, next) => {
    console.error({ req, error });
    res
      .status(500)
      .json({ error: 'Something bad happened, please try again later' });
  });
};

// debug mode
