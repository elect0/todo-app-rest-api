const express = require('express');
const router = express.Router();

const {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodo,
} = require('../controllers/todoController');

/**
 * @route GET api/todo
 * @description Get all todos.
 * @access public
 */
router.get('/', getAllTodo);

/**
 * @route POST api/todo
 * @description Create a new todo.
 * @access public
 */
router.post('/', createTodo);

/**
 * @route PUT api/todo/:id
 * @description Update an existing todo.
 * @access public
 */
router.put('/:id', updateTodo);

/**
 * @route DELETE api/todo/:id
 * @description Delete an existing todo.
 * @access public
 */
router.delete('/:id', deleteTodo);

module.exports = router;
