const express = require('express');
const app = express();
const hbs = require('hbs');
require('./views/hbs/helpers');

const puerto = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

hbs.registerPartials(__dirname + '/views/parciales');

app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home.hbs', {
        nombre: 'marcelo'
    });
});

app.get('/about', (req, res) => {
    // res.render('about.hbs', {
    //     anio: new Date().getFullYear()
    // });
    res.render('about.hbs');
});



app.listen(puerto, () => {
    console.log('Escuchando peticiones en ' + puerto);
});