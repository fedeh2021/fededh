const { validationResult } = require('express-validator');

const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

let mainController = {
    home: function(req, res) {
        return res.render('home',{productos: products})
    },
    registro: function(req, res) {
        return res.render('register')
    },
    login: function(req, res) {
        return res.render('login')
    },
    processLogin: function(req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let usersJSON = fs.readFileSync('users.json', {errors: errors.errors})
            let users;
            if (usersJSON == "") {
                users = [];
            } else {
                users = JSON.parse(usersJSON);
            }
            let usuarioALoguearse

            for (let i = 0; i < users.length; i++) {
                if (users[i].email == req.body.email) {
                   if (bcrypt.compareSync(req.body.password, users[i].password))
                    usuarioALoguearse = users[i];
                    break;
                }
            }
        if (usuarioALoguearse == undefined ) {
            return res.render('login', {errors: [
                {msg: 'credenciales invalidas'}
            ]});
        }
        req.session.usuarioLogueado = usuarioALoguearse;
        if (req.body.recordame != undefined) {
            res.cookie('recordame', usuarioALoguearse.email, { maxAge: 60000 })
        }
        res.render('success')
        } else {
            return res.render('login', {errors: errors.errors})
        }
    },
    /*store: (req, res) => {
        if(req.file) {
            let group = req.body;
            group.image = req.file.filename;
            groupId = groupsModel.create(group);
            res.redirect('/avatars' + groupId);
        } else {
            res.render('register');
        }
    },
    store: function(req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()){
           let user = req.body;
        userId = usersModel.create(user);
        res.redirect('/' + userId); 
        } else {
            res.render('register', { errors: errors.array(),//convertir errores en array y enviarlos a la vista
            old: req.body}); //recuerda lo ultimo
        }
    },*/
};

module.exports = mainController;