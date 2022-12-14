const express = require('express');
const app = express();
app.use(express.json()); // body-parser

const tasks = [];
let id = 1;
// uuid, nanoid

// router

// const router = express.Router();
// app.use('/router', router);

const cors = (req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  next();
};

app.use(cors);

app.get('/tasks', (req, res) => {
  const { description } = req.query;
  if (description) {
    const filteredTasks = tasks.filter((task) =>
      task.description.includes(description)
    );
    res.json(filteredTasks);
    return;
  }
  res.json(tasks);
});

app.get('/tasks/:id', (req, res) => {
  const { id } = req.params; // id is string
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    // return res.status(404).json({ error: "Task not found" });
    res.status(404).json({ error: 'Task not found' });
    return;
  }
  res.json(task);
});

app.post('/tasks', (req, res) => {
  const { description } = req.body;
  const task = { id: id++, description, done: false };
  tasks.push(task);
  res.status(201).json(task);
});

/**
 * task array [
 *    {id: 1, description: "", done: false}
 * ]
 *  */
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { description, done } = req.body;
  const task = tasks.find((task) => task.id === Number(id));
  if (!task) {
    // return res.status(404).json({ error: "Task not found" });
    res.status(404).json({ error: 'Task not found' });
    return;
  }
  if (description) {
    task.description = description;
  }
  // done can be a string
  if (done) {
    task.done = !!done;
  }
  res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  // splice
  const index = tasks.findIndex((task) => task.id === +id);
  if (index === -1) {
    // return res.status(404).json({ error: "Task not found" });
    res.status(404).json({ error: 'Task not found' });
    return;
  }
  tasks.splice(index, 1);
  // res.status(204).json({ message: 'Task not found' });
  res.sendStatus(204); // no content
});

app.listen(3000, () => {
  console.log('server listening on port 3000');
});
