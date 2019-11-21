'use strict';

const ModelUser = require('../models').User;

class UserController {
    static home(req, res) {
        res.render('home')
    }

    static data(req, res) {
        res.render('data')
    }

    static login(req, res) {
        res.render('login')
    }

    static register(req, res) {
        res.render('register')
    }

    static registerAction(req, res) {
        if (req.body.password === req.body.confirmPassword) {
            const dataUser = {
                nama: req.body.name,
                email: req.body.mobileNumber,
                phone: req.body.email,
                password: req.body.password
            }
            ModelUser.create(dataUser)
                .then(() => {
                    const response = {
                        status: 'success',
                        message: 'Registasi Sukses, Silahkan Login Dengan Menggunakan Email & Password Yang Telah Anda Daftarkan!'
                    }
                    res.render('register',{response})
                })
                .catch(err => {
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

}

module.exports = UserController;