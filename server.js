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

var isRunning = false;
var endGame = false;
var start_time = 6;
var currentAmount = 1;
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

    console.log('socket connected: ' + socket.id);    
    socket.emit('connected', {});
    
    timeoutObj = setInterval(() => {
      if(!isRunning)
        socket.emit('startTime', {timeCount:start_time});
    }, 1000);

    timeoutObj = setInterval(() => {
      if(isRunning)
        socket.emit('currentAmount', {currentAmount:currentAmount});
    }, 100);
    	/////////////////////////////////
  });  
  
  function startTime(){     
    console.log(start_time)   
    start_time--;
    if(start_time==-1){
      isRunning=true;
      start_time=6;

      if(isRunning){
        var totalNum = (999999999/parseFloat(getRandomArbitrary(1,1000000000))).toFixed(2);
        console.log(totalNum)
        currentAmount=1;
        timeoutObj = setInterval(() => {
          // socket.emit('currentTime', {timeCount:i});
          if(currentAmount.toFixed(2)!=totalNum){
            console.log(currentAmount.toFixed(2))
            currentAmount+=0.01;
          }
          else if(currentAmount.toFixed(2)==totalNum){
            isRunning=false;
          }
        },100);     
      } 

    }          
}

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  timeoutObj = setInterval(() => {
    if(!isRunning)
      startTime()
  }, 1000); 