/**
 * Created by akash on 10/8/16.
 */

console.log("Server started");
var io = require("socket.io")(17001);
io.on("connection", function (socket) {
    var address = socket.request.connection.remoteAddress;
    console.log("Someone joined. Socket ID:", socket.id, address);
    io.emit("message");
    socket.on("disconnect", function () {
        console.log("Someone disconnected!");
    });
});