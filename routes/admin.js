'use strict'

const express = require('express');
const router = express.Router();

const AdminController = require('../controllers/adminController');

router.get('/member',AdminController.member)

module.exports = router;