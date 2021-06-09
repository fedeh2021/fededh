let express = require('express');
const router = require('./productos');



router.get('/register', function(req, res) {
    res.sendFile(path.resolve(__dirname,'./views/register.html'))
});

router.get('/home', function(req, res) {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
});


router.get('/login', function(req, res) {
    res.sendFile(path.resolve(__dirname,'./views/login.html'))
});




module.exports = router;