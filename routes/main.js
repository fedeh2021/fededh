let express = require('express');
let router = express.Router();
const multer = require('multer');
const path = require('path');
const storage = multer.diskStorage({ 
  destination: function (req, file, cb) { 
     cb(null, path.join(__dirname, '../public/img/avatars')); 
  }, 
  filename: function (req, file, cb) { 
    let imageName = 'grupo-' + Date.now() + path.extname(file.originalname); 
    cb(null, imageName);
    } 
});

const uploadFile = multer({ storage });


const mainController = require('../controllers/mainController');

router.get('/register', mainController.registro);

router.get('/',mainController.home);

router.get('/login', mainController.login);

router.post('/register', uploadFile.single('fotoUsuario'), mainController.store);

module.exports = router;