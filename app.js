require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;


//handlebars
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs'); //por defecto a la carpeta views

// Servir contenido estatico
app.use(express.static('public')); // se busca por defecto index

app.get('/', (req, res) => {
	res.render('home', {
		nombre: 'Jimmy Lopez',
		titulo: 'Curso Node'
	});
});
app.get('/generic', (req, res) => {
	res.render('generic',{
		nombre: 'Jimmy Lopez',
		titulo: 'Curso Node'
	});
});
app.get('/elements', (req, res) => {
	res.render('elements',{
		nombre: 'Jimmy Lopez',
		titulo: 'Curso Node'
	});
});

app.get('*', (req, res) => {
	// es como un comodin para cualquier ruta que no sea las definidas
	res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
	console.log(`listening app at http://localhost/${port}`);
});
