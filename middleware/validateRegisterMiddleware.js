const path = require('path');
const { body } = require('express-validator');

module.exports = [
    body('fullName').notEmpty().withMessage('Tenes que escribir tu nombre y apellido'),
	body('nombreUsuario').notEmpty().withMessage('Tenes que escribir un usuario'),
    body('birthday').notEmpty().withMessage('Tenes que elegir tu fecha de cumpleaños'),
	body('email')
		.notEmpty().withMessage('Tenes que escribir un correo electrónico').bail()
		.isEmail().withMessage('Debes escribir un formato de correo válido'),
	body('password').notEmpty().withMessage('Tenes que escribir una contraseña'),
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif', 'jepg'];

		if (!file) {
			throw new Error('Tenes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]