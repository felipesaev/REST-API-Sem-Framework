const Product = require('../models/productModel')

//@desc get all products
//@route  api/products

async function getProducts(request, response) {
    const products = await Product.findAll()
    response.writeHeader(200, {'Content-Type': 'aplication/json'});
    response.end(JSON.stringify(products))
}


//@desc get single product
//@route  api/products/:id

async function getProduct(request, response, id) {
    try {
        const product = await Product.findById(id)
        if(!product) {
            response.writeHeader(404, {'Content-Type': 'aplication/json'});
            response.end(JSON.stringify({message: 'Product Not Found'}));
        } else {
            response.writeHeader(200, {'Content-Type': 'aplication/json'});
            response.end(JSON.stringify(product));
        }
    } catch(error) {
        console.log(error);
    }
}

module.exports = {
    getProducts,
    getProduct
}