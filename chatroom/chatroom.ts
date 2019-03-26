import Vue from 'vue'

const Component = Vue.extend({
	// type inference enabled
})

//const Component = {
//	// this will NOT have type inference,
//	// because TypeScript can't tell this is options for a Vue component.
//}

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
	},
	methods: {
		addMessage: function (event) {
			console.log("Add Message Button Click!");
		}
	}
})