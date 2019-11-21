'use strict'

const express = require('express');
const app = express();
const port = 3000;

const customerRoutes = require('../jaga/routes/user');
const adminRoutes = require('../jaga/routes/admin');

app.set('view engine','ejs')
app.use('/public',express.static('public'))

app.use('/user', customerRoutes);
app.use('/admin', adminRoutes);

app.listen(port, ()=> console.log(`Listening on port ${port}`));