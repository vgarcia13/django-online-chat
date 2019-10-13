var UserName = "";

var welcomeModal = $('#welcomeModal');
var configModal = $('#configModal');

var chatHistory = $('#msg_history');

var chatSocket = new WebSocket(
    'wss://' + window.location.host +
    '/wss/chat/' + roomName + '/');

chatSocket.onmessage = function (e) {
    var data = JSON.parse(e.data);
    console.log(data);
    loadSnippet(data)
};

function loadSnippet(json) {
    var username = json['user'] + " says:";
    var message = json['message'];
    var datetime = json['datetime'];
    if(username.includes(UserName)) {
        chatHistory.append('<div class="outgoing_msg"><div class="incoming_msg_img pull-right"><img src="https://ptetutorials.com/images/user-profile.png" alt="img"></div><div class="sent_msg"><p><span style="font-size: 10px;" id="username">' + username + '</span><br><span style="font-size: 20px;" id="message">' + message + '</span></p><span class="time_date" id="datetime">' + datetime + '</span></div></div>');
    }
    else {
        chatHistory.append('<div class="incoming_msg"><div class="incoming_msg_img"><img src="https://ptetutorials.com/images/user-profile.png" alt="img"></div><div class="received_withd_msg"><p><span style="font-size: 10px;" id="username">' + username + '</span><br><span style="font-size: 20px;" id="message">' + message + '</span></p><span class="time_date" id="datetime">' + datetime + '</span></div></div>');
    }
}

chatSocket.onclose = function (e) {
    console.error('Chat socket closed unexpectedly');
};

document.querySelector('#chat-message-input').onkeyup = function (e) {
    if (this.value !== "") {
        if (e.keyCode === 13) {  // enter, return
            document.querySelector('#chat-message-submit').click();
        }
    }
};

document.querySelector('#chat-message-submit').onclick = function (e) {
    var messageInputDom = document.querySelector('#chat-message-input');
    var message = messageInputDom.value;
    var date = new Date();
    let options = {
        weekday: "long", year: "numeric", month: "short",
        day: "numeric", hour: "2-digit", minute: "2-digit"
    };
    var datetime = date.toLocaleTimeString("en-us", options);
    if(message !== "") {
        chatSocket.send(JSON.stringify({
            'user': UserName,
            'message': message,
            'datetime': datetime
        }));

        messageInputDom.value = '';
    }
};

welcomeModal.modal({backdrop:'static',keyboard:false, show:true});

$('#welcomeModalButton').on('click', function () {
    var userInput = $('#welcome-username').val();
    if(userInput !== "") {
        UserName = userInput;
        welcomeModal.modal('hide');
    }
});

$('#configButton').on('click', function () {
    if(isMobile()) {
        $('#collapsableMenu').click();
    }
    configModal.modal('toggle');
});

$('#configModalButton').on('click', function () {
    var userInput = $('#config-username').val();
    if(userInput !== "") {
        UserName = userInput;
        configModal.modal('hide');
    }
});

function isMobile() {
   return window.innerWidth < 992;
}