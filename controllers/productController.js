const Product = require('../models/productModel')

async function getProducts(request, response) {
        const products = await Product.findAll()
        response.writeHeader(200, {'Content-Type': 'aplication/json'});
        response.end(JSON.stringify(products))
}

module.exports = {
    getProducts
}