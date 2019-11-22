'use strict'

const express = require('express');
const session = require('express-session')
const app = express();
const port = 3000;

const customerRoutes = require('../jaga/routes/user');
const adminRoutes = require('../jaga/routes/admin');

app.set('view engine', 'ejs')
app.use('/public', express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(session({
    secret: 'hacktiv8super',
    resave: false,
    saveUninitialized: true,
}))


app.get('/',(req,res) =>{
    res.render('home')
})

app.use('/user', customerRoutes);
app.use('/admin', adminRoutes);

app.listen(port, () => console.log(`Listening on port ${port}`));