const http = require('http')
const products = require('./data/products.json');

const server = http.createServer((request, response) => {
    if(request.url === '/api/products' && request.method === 'GET') {
        response.writeHeader(200, {'Content-Type': 'aplication/json'});
        response.end(JSON.stringify(products))
    } else {
        response.writeHeader(404, {'Content-Type': 'aplication/json'});
        response.end(JSON.stringify({message:'Route Not found'}))
    }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));