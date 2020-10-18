const http = require('http')
const products = require('./data/products.json');

const server = http.createServer((request, response) => {
   response.writeHeader(200, {'Content-Type': 'aplication/json'});
   response.end(JSON.stringify(products))
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));