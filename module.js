module.exports =  {
	request : require('request'),
	searchIMDB : function (name, cb) {
		name = name;

		this.request('http://omdbapi.com/?s=' + name, function(err,  res, body) {
			var data = JSON.parse(body);
			cb(data);
		});
	},

	getByName : function(name, cb) {
		name = name;
		this.request('http://omdbapi.com/?t=' + name, function(err, res, body) {
			var data = JSON.parse(body);
			cb(data);
		});
	},

	getById : function(name, cb){
		name = name;
		this.request('http://omdbapi.com/?i=' + name, function(err, res, body) {
			var data = JSON.parse(body);
			cb(data);
		});
	}
	
}