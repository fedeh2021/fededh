const express = require('express');
const router = express.Router();

// Controller
const usersController = require('../controllers/userController');

// Middlewares
const uploadFile = require('../middleware/multerMiddleware');
const validations = require('../middleware/validateRegisterMiddleware');
const guestMiddleware = require('../middleware/guestMiddleware');
const authMiddleware = require('../middleware/authMiddleware');

// Formulario de registro
router.get('/register', guestMiddleware, usersController.register);

// Procesar el registro
router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

// Formulario de login
router.get('/login', guestMiddleware, usersController.login);

// Procesar el login
router.post('/login', usersController.loginProcess);

// Perfil de Usuario
router.get('/profile/', authMiddleware, usersController.profile);

// Logout
router.get('/logout/', usersController.logout);

module.exports = router;