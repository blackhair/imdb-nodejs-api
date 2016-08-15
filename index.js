var express = require('express'),
	module  = require('./module'),
	app 	= express();

app.use(express.static(__dirname + "/statics"));


app.get('/s=:Name' , function (req, res, next) {
	module.searchIMDB(req.params.Name, function(data) {
		res.json(data);
	});
});

app.get('/t=:Name', function(req, res, next) {
	module.getByName(req.params.Name, function(data) {
		res.json(data);
	});
});

app.get('/i=:Id', function(req, res, next) {
	module.getById(req.params.Id, function(data){
		res.json(data);
	});
});

app.listen('3000');
console.log('app runnig');