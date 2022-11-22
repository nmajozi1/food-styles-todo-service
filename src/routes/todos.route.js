const express = require('express');
const router = express.Router();
const todosController = require('../controllers/todo.controller');

router.get('/todos', todosController.listTodos);
router.post('/todos', todosController.createTodos);
router.patch('/todos/:id', todosController.patchTodo);
router.delete('/todos/:id', todosController.deleteTodo);

module.exports = router;