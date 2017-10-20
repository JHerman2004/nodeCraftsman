var MongoClient = require('mongodb').MongoClient;

var dbName = "ystocks";
var port = "27017";
var host = "localhost";

function getNumOfDocs (collectionName, host, port, dbName, callback) {
    MongoClient.connect(
    	'mongodb://127.0.0.1:27017/accounting',
    	function (error, db){
        if(error) return callback(err);

        db.collection(collectionName).count({}, function(error, numOfDocs){
            if(error) return callback(err);

            db.close();
            callback(null, numOfDocs);
        });
    }); 
} 


getNumOfDocs("customers", host, port, dbName, function(err, count) {
   if (err) {
       return console.log(err.message);
   }
   console.log('number of documents', count);
});