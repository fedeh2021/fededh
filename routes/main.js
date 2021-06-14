let express = require('express');
let router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/register', mainController.registro);

//router.get('/register', function(req, res) {
  //  res.sendFile(path.resolve(__dirname,'./views/register.html'))
//});

router.get('/',mainController.home);

router.get('/login', mainController.login);

module.exports = router;