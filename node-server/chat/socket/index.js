const Messages = require('../models/Messages');
const moment = require('moment');

class SocketHander {
	constructor() {
		this.db;
	}

	connect() {
		//this.db = require('mongoose').connect('mongodb://localhost:27017/chat');
		this.db = require('mongoose').connect('mongodb+srv://admin:P@ssw0rd123@cluster-i0jr1.mongodb.net/test?retryWrites=true');
		this.db.Promise = global.Promise;
	}

	getMessages() {
		return Messages.find();
	}

	storeMessages(data) {

		console.log(data);
		const newMessages = new Messages({
			name: data.name,
			msg: data.msg,
			time: moment().valueOf(),
		});

		const doc = newMessages.save();
	}
}

module.exports = SocketHander;