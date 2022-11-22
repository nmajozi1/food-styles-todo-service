const Todos = require('../../db/models/todos');

const listTodos = async () => {
    try {
        const todos = await Todos.query();
        return todos;
    } catch (err) {
        throw new Error("Unable to list ToDos");
    }
}

const createTodo = async (todoData) => {
    try {
        const todo = await Todos.query().insert(todoData)
        return todo;
    } catch (err) {
        throw new Error("Unable to create ToDo");
    }
}

const patchTodo = async (id, todo) => {
    try {
        const todoUpdated = await Todos.query().findById(id).patch(todo);
        return todoUpdated;
    } catch (err) {
        throw new Error("Unable to update ToDo");
    }
}

const deleteTodo = async (id) => {
    try {
        const todoDeleted = await Todos.query().deleteById(id);
        return todoDeleted;
    } catch (err) {
        throw new Error("Unable to delete ToDo");
    }
}

module.exports = {
    listTodos,
    createTodo,
    patchTodo,
    deleteTodo
}