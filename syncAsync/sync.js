var http = require('http');

http.createServer(function(request,response){
	console.log('Handling http');


	response.writeHead(200,{'Content-Type': 'text/html'});
	response.write('<b> Hello World </b>');
	response.end();

var a;

for(var i=0;i<10000000000;i++){
	a=i;
}
console.log('For loop finished');

	
}).listen(8080);

// var a;

// for(var i=0;i<10000000000;i++){
// 	a=i;
// }
// console.log('For loop finished');