let express = require('express');
let router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({  // para las fotos de usuario
  destination: function (req, file, cb) { 
     cb(null, path.join(__dirname, '../public/img/avatars')); 
  }, 
  filename: function (req, file, cb) { 
    let imageName = 'grupo-' + Date.now() + path.extname(file.originalname); 
    cb(null, imageName);
    } 
});

const uploadFile = multer({ storage });

let logDBMiddleware = require('../middleware/logDBMiddleware')

const {body, check} = require('express-validator'); //destructuracion
const mainController = require('../controllers/mainController');

const validateCreateForm = [ // decir que voy a validar 
  body('nombreApellido').notEmpty().withMessage('Debes completar el campo de nombre'),
  body('nombreUsuario').notEmpty().withMessage('Debes completar el campo de nombre de usuario'),
  body('email').isEmail().withMessage('Debes completar un email válido')
];

router.get('/',mainController.home);
router.get('/register', mainController.registro);
router.get('/login', mainController.login);
router.post('/login', [
  check('email').isEmail,
  check('password').isLength({min: 8}).withMessage('la contraseña es de 8 caracteres')
],
 mainController.processLogin);

//router.post('/register', uploadFile.single('fotoUsuario'), mainController.store); //poner foto
//router.post('/register', logDBMiddleware, mainController.store); // poner funciones intermedias entre req y res
//router.post('/register', validateCreateForm, mainController.store);

module.exports = router;