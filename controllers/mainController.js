let mainController = {
    home: function(req, res) {
        return res.render('home')
    },
    registro: function(req, res) {
        return res.render('register')
    },
    login: function(req, res) {
        return res.render('login')
    },
    
};

module.exports = mainController;