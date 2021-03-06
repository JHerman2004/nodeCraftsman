'use strict'
var customFunctions = require('./customFunctions');
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
	'mongodb://127.0.0.1:27017/accounting',
	function(err, connection){
		var collection = connection.collection('customers');
		collection.find(
			{'v': {'$gt': 3}},
			{
				'skip': 100000,
				'limit': 10,
				'sort': 'v'
			}
			).toArray(function (err, documents){
				customFunctions.logDocuments(documents);
				connection.close();
			});
		});