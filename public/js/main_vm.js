import ChatMessage from "./modules/ChatMessage.js";

// this is from our node_modules folder
const socket = io();

// the packet is whatever data we send through with the connect event from the server
function setUserId({sID}) {
    //debugger;
    console.log(sID);
    vm.socketID = sID;
}

function showDisconnectMessage() {
    console.log('a user disconnected');
}

function appendMessage(message) {
    vm.messages.push(message);
}

function appendEmojis(emoji) {
    vm.messages.push(emoji);
}


const vm = new Vue({
    data: {
        socketID: "",
        message: "", // store whatever we type in the text area
        nickname: "",
        messages: [],
        emoji: []
    },

    methods: {
        // emit a message event to the server so thay it can in turn send this to anyone who's connected
        dispatchMessage() {
            console.log('handle emit message');

            // the double pipe is an "or" operator
            socket.emit('chat_message', {
                content: this.message,
                name: this.nickname || "anonymous"
            })

            this.message = "";


           
        }
    },

    // dispatchEmojis(){
    //     socket.emit('chat_message', {
    //         content: this.emoji,
    //         name: this.nickname || "anonymous"
    //     })

    //     this.emoji = "";
    // },

    mounted: function() {
        console.log('vue is done mounting');
    },

    components: {
        newmessage: ChatMessage
    }
}).$mount("#app");


socket.addEventListener('connected', setUserId);
socket.addEventListener('disconnect', showDisconnectMessage);
socket.addEventListener('new_message', appendMessage);