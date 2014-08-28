_ = require('../../node_modules/underscore/underscore.js')._
Promise = require('../../node_modules/es6-promise').Promise;
Events = require('../../src/events.js');
WebSocket = require('websocket').client;
pg = require('pg').native;
Cow = require('../../dist/cow.node.js');

core = new Cow.core({herdname: 'test'});
core.socketservers({
        _id: 'default', 
        data: {protocol:'ws',ip:'192.168.26.95', port:8081}
        //data: {protocol:'wss',ip:'192.168.40.10', port:443}
      });
core.socketserver('default');
console.log('Connecting');
core.connect();

core.peerStore().on('datachange',function(){
        console.log('Numpeers: ',core.peers().length);
});
core.userStore().on('datachange', function(){
	console.log('numusers: '+ core.users().length);
});
core.userStore().loaded.then(function(){
        
});