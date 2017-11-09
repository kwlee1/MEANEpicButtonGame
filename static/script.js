$(document).ready(function (){
    // triggers the connection event in our server!
    var socket = io.connect();
    // submit data to the server using emit
    $('#plus').click(function(e) {
        e.preventDefault();
        console.log('plus')
        socket.emit("plus", {});
    });
    $('#reset').click(function(e) {
        e.preventDefault(); 
        socket.emit("reset", {});
    });
    socket.on('newcount', function (data){
        console.log('final step')
        $('#number'). html("The button has been pushed " + JSON.stringify(data.response) + " time(s)");
    });
});