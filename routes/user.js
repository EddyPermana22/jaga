'use strict'

const express = require('express');
const router = express.Router();

const UserController = require('../controllers/userController');

router.get('/',UserController.home)

router.get('/login',UserController.login)

router.get('/register',UserController.register)

router.get('/forget-password',UserController.forgetPassword)

router.get('/daftar-tagihan',UserController.daftarTagihan)

router.get('/success',UserController.success)

router.get('/error',UserController.error)

// router.get('/login',UserController.login)

module.exports = router;