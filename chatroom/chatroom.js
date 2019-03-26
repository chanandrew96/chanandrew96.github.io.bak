"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
var Component = vue_1.default.extend({
// type inference enabled
});
var chatApp = new vue_1.default({
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
});
//# sourceMappingURL=chatroom.js.map