let express = require('express');

let router = express.Router();

/*router.get('/:idProducto', function(req, res) {
    res.send("Bienvenidos al detalle del producto " + req.params.idProducto);
});*/
router.get('/', function(req, res) {
    res.sendFile(path.resolve(__dirname,'./views/home.html'))
});

module.exports = router;