const User = require('../../db/models/user');

const fetchUser = async (id) => {
    try {
        const user = await User.query().findById(id);
        return user;
    } catch (err) {
        console.error(err);
        return err;
    }
}

const createUser = async (userData) => {
    try {
        const user = await User.query().insert(userData);
        return user;
    } catch (err) {
        return err;
    }
}

const patchUser = async (id, user) => {
    try {
        const userUpdated = await User.query().findById(id).patch(user);
        return userUpdated;
    } catch (err) {
        return err;
    }
}

const deleteUser = async (id) => {
    try {
        const userDeleted = await User.query().deleteById(id);
        return userDeleted;
    } catch (err) {
        console.error(err);
        return err;
    }
}

module.exports = {
    fetchUser,
    createUser,
    patchUser,
    deleteUser
};