'use strict'

const express = require('express');

const app = express();
const port = 3000;

const customerRoutes = require('../jaga/routes/user');
const adminRoutes = require('../jaga/routes/admin');
const UserController = require('../jaga/controllers/userController');
const checkTagihan = require('../jaga/helpers/checkTagihan');

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.locals.checkTagihan = checkTagihan

app.get('/',(req,res) =>{
    res.render('home')
})

app.get('/login', UserController.login);
app.post('/login', UserController.loginAction);

app.get('/register', UserController.register);
app.post('/register', UserController.registerAction);

app.get('/forget-password', UserController.forgetPassword);
// app.post('/forget-password',UserController.forgetPasswordAction);

app.use('/user', customerRoutes);
app.use('/admin', adminRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));