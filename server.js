const { response } = require("express");
const express = require("express"); 

const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello How are you</h1>");
})

app.get("/contact", function(req, res){
    res.send("Contact me at tarundh199&@gmail.com");
});

app.get("/about", function(req, res){
    res.send("<h1>let me tell you about myself</h1> <p>My name is tarun dahiya. i am 22 years old and doing really well in life. i havnt earned a lot of money but i earned alot of lessons in life</p> ");
});

app.listen(3000, function(){
    console.log("server started on the port 3000");
});