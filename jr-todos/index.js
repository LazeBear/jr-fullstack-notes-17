const express = require('express');
const app = express();
app.use(express.json()); // body-parser

const tasks = [];
let id = 1;
// uuid, nanoid

const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  next();
};

app.use(cors);

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { description } = req.body;
  const task = { id: id++, description, done: false };
  tasks.push(task);
  res.status(201).json(task);
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
