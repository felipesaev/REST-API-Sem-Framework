const http = require('http')

const server = http.createServer((request, respose) => {
    respose.statusCode = 200;
    respose.setHeader('Content-Type', 'text/html');
    respose.write('<h1>Felipe</h1>')
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));