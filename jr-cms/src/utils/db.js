const mongoose = require('mongoose');

const connectToDB = () => {
  // DB_HOST, DB_PORT, DB_PASSWORD
  const connectionString = process.env.CONNECTION_STRING;
  if (!connectionString) {
    console.error('connection string is undefined');
    // 正常退出
    // 非正常退出
    // 人为正常退出 process.exit(0)
    // 人为非正常退出
    process.exit(1);
  }
  const db = mongoose.connection;
  db.on('connected', () => {
    // logger.info
    // mongodb://user:password@xxxx.com
    console.log(`DB connected, ${connectionString}`);
  });
  db.on('error', (error) => {
    console.error(error);
    process.exit(2);
  });
  db.on('disconnected', () => {
    console.log('db disconnected');
  });
  return mongoose.connect(connectionString);
};

module.exports = connectToDB;

// connectToDB().then().catch
