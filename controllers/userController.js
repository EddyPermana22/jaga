'use strict';

class UserController {
    static home(req, res) {
        res.render('home')
    }


    static login(req, res) {
        res.render('login')
    }


    static register(req, res) {
        res.render('register')
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