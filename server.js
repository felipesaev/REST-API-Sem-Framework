const http = require('http')
const { getProducts, getProduct } = require('./controllers/productController')

const server = http.createServer((request, response, id) => {
    if(request.url === '/api/products' && request.method === 'GET') {
        getProducts(request, response)
    } else if(request.url.match(/\/api\/products\/([0-9]+)/) && request.method === 'GET') {
        const id = request.url.split('/')[3]
        getProduct(request, response, id)        
    } else {
        response.writeHeader(404, {'Content-Type': 'aplication/json'});
        response.end(JSON.stringify({message:'Route Not found'}))
        console.log('dsda', request.url.match(/\/api\/products\/([0-9]+)/))
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));