'use strict'

const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');

router.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
})

router.get('/', UserController.userDashboard);

router.get('/login', UserController.login);
router.post('/login', UserController.loginAction);

router.get('/register', UserController.register);
router.post('/register', UserController.registerAction);

router.get('/forget-password', UserController.forgetPassword);
// router.post('/forget-password',UserController.forgetPasswordAction);

router.get('/daftar-tagihan', UserController.daftarTagihan);

router.get('/success', UserController.success);

router.get('/error', UserController.error);

// router.get('/login',UserController.login);

module.exports = router;