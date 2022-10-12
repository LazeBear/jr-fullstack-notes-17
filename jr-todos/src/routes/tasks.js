const express = require('express');
const {
  getAllTasks,
  getTaskById,
  updateTaskById,
  deleteTaskById,
  addTask,
} = require('../controllers/tasks');

const taskRouter = express.Router();

// GET /1
taskRouter.get('', getAllTasks);
taskRouter.get('/:id', getTaskById);
taskRouter.put('/:id', updateTaskById);
taskRouter.delete('/:id', deleteTaskById);
taskRouter.post('', addTask);

module.exports = taskRouter;
