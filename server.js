const routes = require('./routes/myroutes');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
var cors = require('cors');
const util = require( 'util' );
var server = require('http').createServer(app);
var port = 3000;
var io = require('socket.io')(server);

gameSocket = null;
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/api', routes);

// Start server
// server.listen(port);
server.listen(port, function(){
	console.log('listening on *:' + port + '--- server is running ...');
});

// Implement socket functionality
gameSocket = io.on('connection', function(socket){

    socket.on('disconnect', () => {
      console.log('user disconnected');
    });
    
    socket.on('bet amount', (req) => {
      console.log(req)
      socket.emit('user list', req);
    });

    console.log("user connected")
    console.log('socket connected: ' + socket.id);    
    socket.emit('connected', {});

	/////////////////////////////////
  });

function guid() {
	function s4() {
		return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1);
	}
	return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

