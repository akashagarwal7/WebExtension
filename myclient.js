/**
 * Created by akash on 11/8/16.
 */

var address = "localhost";
var client = io("http://" + address + ":17001/");
client.on("test", function () {
    // $("#blah").append("Asd");
    $("#test").text("asdasdad");
});

client.on("message", function () {
    // $("#blah").append("Asd");
    $("#test").text("message");
});