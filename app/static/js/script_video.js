var socket = io();

socket.on('connect', function() {
    socket.emit('echo', {data: 'Connected at js'});
});

socket.on('log_msg', function(msg) {
    console.log('Logging' + msg.data);
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
    runID = window.setInterval(function(){
      socket.emit('get_img');
    }, 100);
};
get_img_stop = function() {
    clearInterval(runID);
};
