var http = require("http");
var url = require('url');
var fs = require('fs');
var io = require('socket.io'); // 加入 Socket.IO
var MongoClient = require('mongodb').MongoClient;

var server = http.createServer(function (request, response) {
	console.log('Connection');
	var path = url.parse(request.url).pathname;

	switch (path) {
		case '/':
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write('Hello, World.');
			response.end();
			break;
		case '/socket.html':
			fs.readFile(__dirname + path, function (error, data) {
				if (error) {
					response.writeHead(404);
					response.write("opps this doesn't exist - 404");
				} else {
					response.writeHead(200, { "Content-Type": "text/html" });
					response.write(data, "utf8");
				}
				response.end();
			});
			break;
		case '/index.html':
			fs.readFile('../index.html', function (error, data) {
				if (error) {
					response.writeHead(404);
					response.write("opps this doesn't exist - 404");
				} else {
					response.writeHead(200, { "Content-Type": "text/html" });
					response.write(data, "utf8");
				}
				response.end();
			});
			break;
		case '/mongoDb.html':
			const uri = "mongodb+srv://admin:P@ssw0rd123@cluster-i0jr1.mongodb.net/test?retryWrites=true";
			const client = new MongoClient(uri, { useNewUrlParser: true });
			client.connect(err => {
				const collection = client.db("test").collection("devices");
				// perform actions on the collection object
				console.log('mongodb running!');

				client.db.collection('Persons', function (err, collection) {

					collection.insert({ id: 1, firstName: 'Steve', lastName: 'Jobs' });
					collection.insert({ id: 2, firstName: 'Bill', lastName: 'Gates' });
					collection.insert({ id: 3, firstName: 'James', lastName: 'Bond' });

					client.db.collection('Persons').count(function (err, count) {
						if (err) throw err;

						console.log('Total Rows: ' + count);
					});
				});

				client.close();
			});
			break;
		default:
			response.writeHead(404);
			response.write("opps this doesn't exist - 404");
			response.end();
			break;
	}
});

server.listen(8001);

var serv_io = io.listen(server);
var msgHistory = [];
serv_io.set('log level', 1);

serv_io.sockets.on('connection', function (socket) {
	setInterval(function () {
		socket.emit('date', { 'date': new Date() });
	}, 1000);

	socket.on('client_data', function (data) {
		process.stdout.write(data.letter);
	});
});