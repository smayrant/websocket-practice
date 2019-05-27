const express = require("express");
const socket = require("socket.io");

const app = express();
const server = app.listen(3000, function () {
	console.log("listening to requests on port 3000");
});

// static files
app.use(express.static("public"));

// socket setup
const io = socket(server);

io.on("connection", function (socket) {
	console.log("made socket connection", socket.id);

	socket.on("chat", function (data) {
		io.sockets.emit("chat", data);
	});
});
