module.exports =  {
	request : require('request'),
	searchIMDB : function (name) {
		name = name;

		this.request('http://omdbapi.com/?s=' + name, function(err,  res, body) {
			var data = JSON.parse(body);
			data.Search.forEach(function(s) {
				console.log(s.Title);

			});

		});
	},

	getByName : function(name) {
		name = name;
		this.request('http://omdbapi.com/?t=' + name, function(err, res, body) {
			var data = JSON.parse(body);
			console.log(data)
		});
	}
	
}