var redis = require('redis');
var EventEmitter = require('events').EventEmitter;

module.exports = function (port, host) {

	var pubClient = redis.createClient(port, host);
	var subClient = redis.createClient(port, host);

	var broker = new EventEmitter();

	subClient.on('message', function (channel, message) {
		broker.emit('message', channel, message);
	});

	broker.subscribe = subClient.subscribe.bind(subClient);
	broker.unsubscribe = subClient.unsubscribe.bind(subClient);
	broker.publish = pubClient.publish.bind(pubClient);

	return broker;
};
