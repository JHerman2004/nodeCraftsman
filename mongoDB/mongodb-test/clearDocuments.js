'use strict'

var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
	'mongodb://127.0.0.1:27017/accounting',
	function(err, connection){
		var collection = connection.collection('customers').remove({});
		connection.close();
	});