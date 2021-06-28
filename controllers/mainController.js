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
    store: (req, res) => {
        if(req.file) {
            let group = req.body;
            group.image = req.file.filename;
            groupId = groupsModel.create(group);
            res.redirect('/avatars' + groupId);
        } else {
            res.render('register');
        }
    },
};

module.exports = mainController;