console.log('Works');

_bufferConvert = function(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var len = bytes.byteLength();
    for (var i = 0; i < len; i ++) {
        binary += String.fromCharCode(bytes[i])
    }
    return window.btoa(binary);
};


var socket = io();

socket.on('connect', function() {
    socket.emit('echo', {data: 'Connected at js'});
});

socket.on('log_msg', function(msg) {
    console.log('Logging' + msg.data);
    //var newmsg = $("<li/>");
    //newmsg.text(msg.data);
    //$("#log").append(newmsg);
});

socket.on('update_img', function(msg) {
    $("#img-container").attr("src","data:image/jpeg;base64," + msg.data)
});

onload = function() {
    get_img_start();
};

get_img_one = function() {
    socket.emit('get_img');
};

var runID = 0;
get_img_start = function() {
    //console.log("starting")
    runID = window.setInterval(function(){
      socket.emit('get_img');
    }, 100);
    //console.log("set runID: " + runID)
};
get_img_stop = function() {
    //console.log("stopping")
    clearInterval(runID);
};