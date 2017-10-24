'use strict';

var request = require('request');

describe('The API', function(){
	console.log("hello");	
	it('should respond to a GET request at /api/keywords/', function(done){
		request.get(
		{
			'url': 'http://127.0.0.1:8080/api/keywords/',
			'json': true
		},
		function (err, res, body){
			expect(res.statusCode).toBe(200);
			expect(body.foo).toEqual('bar');
			done();
		});
	});

});
