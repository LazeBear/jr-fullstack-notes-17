require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const swaggerUi = require('swagger-ui-express');
// ./xxxx/index.js -> ./xxxx
const v1Router = require('./routes');
const logger = require('./utils/logger');
const swaggerJSDoc = require('./utils/swagger');
const app = express();

const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json()); // body-parser
app.use(cors());
app.use(morgan(process.env.NODE_ENV === 'production' ? 'common' : 'dev'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));

// GET /tasks/1
app.use(v1Router);

app.listen(PORT, () => {
  logger.debug(`server listening on port ${PORT}`);
});
