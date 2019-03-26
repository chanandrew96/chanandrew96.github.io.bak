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
		],
		msgList: [],
		newMessage: ''
	},
	methods: {
		addMessage: function (event) {
			console.log("Add Message Button Click! newMessage: " + this.$data.newMessage);
			if (this.$data.newMessage.trim() != '') {
				var dt = new Date(Date.now());
				this.$data.msgList.push({ msgContent: this.$data.newMessage, sendTime: dt.toLocaleString("en-US") });
			}
			this.$data.newMessage = '';
		}
	}
})