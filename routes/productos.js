let express = require('express');

let router = express.Router();

router.get('/:idProducto', function(req, res) {
    res.send("Bienvenidos al detalle del producto " + req.params.idProducto);
});

module.exports = router;