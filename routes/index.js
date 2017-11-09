module.exports = function Route(app, server){
	var io = require('socket.io').listen(server) 
    // root route to render the index.ejs view
    var counter = 0; 

	app.get('/', function(req, res) {
	 res.render("index", { counter: counter });
	});
	//listen to connection even from the client side
	io.sockets.on('connection', function (socket){
		//server listens to "posting_form" event
		socket.on("plus", function (data){
            counter++; 
            io.emit('newcount', {response: counter});
        })
        socket.on("reset", function (data){
            counter = 0; 
            io.emit('newcount', {response: counter});
		})
	})
};