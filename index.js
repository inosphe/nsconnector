var request = require('request');
var config = require('./config.json');

function ping(){
	var body = {port: config.target_port || 8080}
	console.log('ping', config.redirector, body)
	request({
		method: 'put'
		, url: config.redirector + '/' + config.session
		, json: body
	}, function(err, res, body){
		console.log('pong', res&&res.statusCode, body);
		if(err){
			console.log(err);
		}
	})	

}

setInterval(ping, 1000*60*5);
ping();
