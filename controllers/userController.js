'use strict';

const ModelUser = require('../models').User;
const bcrypt = require('bcrypt');
const checkTagihan = require('../helpers/checkTagihan');

class UserController {
    static userDashboard(req, res) {

        res.send(req.session.userdata)
        // res.render('data')
    }

    static data(req, res) {
        res.render('data')
    }

    static login(req, res) {
        res.render('login')
    }

    static loginAction(req, res) {
        ModelUser.findOne({
            where: {
                email: req.body.email,
            }
        })
            .then((user) => {
                // res.send(bcrypt.compareSync(req.body.password, user.password))
                if(bcrypt.compareSync(req.body.password, user.password)) {
                    req.session.userdata = {
                        userId : user.id,
                        name: user.name,
                        email: user.email
                    }
                    res.redirect('/user')
                }
                else{
                    const response = {
                        status: 'error',
                        message: 'Kombinasi Email & Password Salah!'
                    }
                    res.render('login', {response})
                }
            })
            .catch(err => {
                const response = {
                    status: 'error',
                    message: 'Kombinasi Email & Password Salah!'
                }
                // res.send(err)
                res.render('login', {response})
            })

    }

    static register(req, res) {
        res.render('register')
    }

    static registerAction(req, res) {
        if (req.body.password === req.body.confirmPassword) {
            const dataUser = {
                nama: req.body.name,
                email: req.body.email,
                phone: req.body.mobileNumber,
                password: req.body.password
            }
            ModelUser.create(dataUser)
                .then(() => {
                    const response = {
                        status: 'success',
                        message: `
                        Registasi Sukses!
                        Silahkan Login Menggunakan Email & Password Yang Anda Daftarkan!`
                    }
                    res.render('register', { response })
                })
                .catch(err => {
                    const response = {
                        status: 'error',
                        message: err.message
                    }
                    res.render('register', { response })
                    res.send(err.message)
                })
        }
        else {
            res.send('Password Tidak Sama')
        }

    }

    static forgetPassword(req, res) {
        res.render('forget-password')
    }

    static daftarTagihan(req, res) {
        res.render('daftar-tagihan')
    }

    static success(req, res) {
        res.render('success')
    }

    static error(req, res) {
        res.render('error')
    }

    static test(req,res){
        res.send(checkTagihan('BPJS','0001431556931'))
    }

}

module.exports = UserController;