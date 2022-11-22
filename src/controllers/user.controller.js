const userService = require('../services/user.service');

const fetchUser = async (req, res) => {
    const { id } = req.params;
    const user = await userService.fetchUser(id);
    res.json(user);
}

const insertUser = async (req, res) => {
    const userData = req.body;
    const user = await userService.createUser(userData);
    res.json(user);
}

const patchUser = async (req, res) => {
    const { id } = req.params;
    const userData = req.body;
    const userUpdated = await userService.patchUser(id, userData);
    res.json(userUpdated);
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    const userDeleted = await userService.deleteUser(id);
    res.json(userDeleted)
}

module.exports = {
    fetchUser,
    insertUser,
    patchUser,
    deleteUser
}