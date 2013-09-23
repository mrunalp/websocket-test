/* Simple server to ping/pong messages using wscat */

var host = process.env.OPENSHIFT_NODEJS_IP;
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

var WebSocketServer = require('ws').Server,
    wss = new WebSocketServer({host: host, port: port});
    wss.on('connection', function(ws) {
      ws.on('message', function(message) {
        console.log('received: %s', message);
        ws.send(message);
      });
      ws.send('something');
    });

