var express = require('express'),
	module  = require('./module'),
	app 	= express();

app.get('/search/:Name' , function (req, res, next) {
	module.searchIMDB(req.params.Name);
	res.end();
});

app.get('/getByName/:Name', function(req, res, next) {
	module.getByName(req.params.Name);
	res.end();
});


app.listen('3000');
console.log('app runnig');