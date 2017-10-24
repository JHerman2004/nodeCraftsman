'use strict';

var request = require('request');

request('http://127.0.0.1:8080/', function (err, res, body){
			console.log(err);
			console.log(res.statusCode);
			console.log(body);
		});