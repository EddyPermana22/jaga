'use strict'

const express = require('express');
const session = require('express-session')
const router = express.Router();

const UserController = require('../controllers/userController');

router.use(session({
    secret: 'hacktiv8super',
    resave: false,
    saveUninitialized: true,
}))

function checkLogin(req, res, next) {
    res.send(req.session)
    // next()
}



router.get('/',checkLogin, UserController.userDashboard);

router.get('/login', UserController.login);
router.post('/login', UserController.loginAction);

router.get('/register', UserController.register);
router.post('/register', UserController.registerAction);

router.get('/forget-password', UserController.forgetPassword);
// router.post('/forget-password',UserController.forgetPasswordAction);

router.get('/daftar-tagihan',checkLogin, UserController.daftarTagihan);

router.get('/success', UserController.success);

router.get('/error', UserController.error);

// router.get('/login',UserController.login);

module.exports = router;