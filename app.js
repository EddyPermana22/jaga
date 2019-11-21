'use strict'

const express = require('express');
const app = express();
const port = 3000;

const customerRoutes = require('../jaga/routes/user');



app.set('view engine','ejs')
app.use('/public',express.static('public'))
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use('/user', customerRoutes);

app.listen(port, ()=> console.log(`Listening on port ${port}`));