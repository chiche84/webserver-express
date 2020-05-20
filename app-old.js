const http = require('http');

http.createServer((req, resp) => {

        resp.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'marcelo',
            edad: 35,
            url: req.url
        }

        resp.write(JSON.stringify(salida));
        //resp.write('Hola Mundo');
        resp.end();
    })
    .listen(8081);

console.log('Escuchando en el 8081');