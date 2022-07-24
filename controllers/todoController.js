const Todo = require('../models/todoModel');

const getAllTodo = (req, res) => {
  Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) => {
      res.status(404).json({
        message: `Todo not found, error: ${err.message}`,
      });
    });
};

const createTodo = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.send('All fields are required.');
  }

  Todo.create({
    title,
    description,
  })
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      res.status(400).json({ error: err.message });
    });
};

const updateTodo = (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.send('All fields are required.');
  }

  Todo.findByIdAndUpdate(req.params.id, {
    title,
    description,
  })
    .then((data) => res.json({ message: 'Updated successfully' }))
    .catch((err) => {
      res
        .status(400)
        .json({ message: 'Failed to update todo', error: err.message });
    });
};

const deleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.id)
    .then(() => res.send('Successfully deleted todo.'))
    .catch((err) => res.status(400).json({ error: `Error: ${err}` }));
};

module.exports = {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
