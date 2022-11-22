const todoService = require('../services/todos.servics');

const listTodos = async (req, res) => {
    try {
        const todos = await todoService.listTodos();
        res.status(200).json(todos);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const createTodos = async (req, res) => {
    try {
        const todoData = req.body;
        await todoService.createTodo(todoData);
        const todos = await todoService.listTodos();
        res.status(200).json(todos);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const patchTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todoData = req.body;
        await todoService.patchTodo(id, todoData);
        const todos = await todoService.listTodos();
        res.json(todos);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        await todoService.deleteTodo(id);
        const todos = await todoService.listTodos();
        res.json(todos);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    listTodos,
    createTodos,
    patchTodo,
    deleteTodo
}