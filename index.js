	//var app = require('express')();

	//var httpListeningTool = require('http').Server(app);
	

	/*
	app.get('/', function(request, response){
		response.send('<h1>Hello World</h1>')
	});

	httpListeningTool.listen(3000, function(){
		console.log('listening on *:3000')
		});
	*/

//Accessing express module
	var app = require('express')();
//Using http - module that is innate to NODE.JS
//('http') - built in node module -we're passing 
//the app variable through the built in Server function
	var http = require('http').Server(app);
//apps are built in to Express

//app.get -first argument is path
//second argument is callback
// '/' root directory

	app.get('/', function(req, res){
		res.sendFile(__dirname + '/index.html');
	});
//
	http.listen(3000, function(){
		console.log('listening on *:3000')
	});