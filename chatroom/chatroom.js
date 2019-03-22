"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
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
    }
});
//# sourceMappingURL=chatroom.js.map