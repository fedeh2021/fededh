const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

function productoEncontrado (req, res, next){
    let idProducto = req.params.id;	

    for(let i=0;i<products.length;i++){
        if (products[i].id==idProducto){
            var productoEncontrado = products[i];
            next();
        }
    }


}

module.exports = productoEncontrado
