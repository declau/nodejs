var app = require('express')();
app.set('view engine', 'ejs')
console.log("modulo esta sendo carregado")

module.exports = function() {	
	return app;
}