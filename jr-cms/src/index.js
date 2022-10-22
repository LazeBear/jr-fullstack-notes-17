require('dotenv').config();
const express = require('express');
const errorMiddleware = require('./middleware/errorMiddleware');

require('express-async-errors');
const v1Router = require('./routes');
const connectToDB = require('./utils/db');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/v1', v1Router);

errorMiddleware(app);

connectToDB();

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});
