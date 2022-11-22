const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/user/:id', userController.fetchUser);
router.post('/user', userController.insertUser);
router.patch('/user/:id', userController.patchUser);
router.delete('/user/:id', userController.deleteUser);

module.exports = router;