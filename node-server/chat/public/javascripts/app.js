socket = io.connect('ws://localhost:3001');

socket.on('message', (obj) => {
	console.log(obj);
});

let data = {
	name: 'Robby',
	msg: 'Hi~',
};

socket.emit('message', data);
//socket.emit('message', 'Hi! Robby');