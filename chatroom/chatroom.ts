import Vue from 'vue'

interface user {
	userId: number;
	username: string;
	userPassword: string;
}

var chatApp = new Vue({
	el: '#chatApp',
	data: {
		message: 'Hello World! This page used Vue.js',
		myInfo: {
			name: 'Andrew Chan',
			title: 'Hello'
		},
		msgHistory: [
			{ user: 'A user', text: '123Test' },
			{ user: 'B user', text: 'Test456' }
		],
		parentMsg: 'Hello',
		items: [
			{ childMsg: 'Foo' },
			{ childMsg: 'Bar' }
		]
	}
})