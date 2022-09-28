
var express = require("express");
var http = require("http");
var path = require("path");
var nodemailer = require("nodemailer");
const { response } = require("express");

var app = express();
var server = http.Server(app);
var port = 500;

app.set("port", port);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "img")));

//routing
app.get("/", function(req, response){
    response (path.join(__dirname, "img/grab.html"))
})

app.post("/send_email", function(req, response){
    var from = req.body.from;
    var to = "akoredealao18@gmail.com";
    var subject = req.body.subject;
    var message = req.body.message;
    var message1 = req.body.message1;
    // var message1 = req.body.message1;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'codeandassociate@gmail.com',
            pass: 'dxojdanvsxdirsdf'
        }
    });
    var mailOptions = {
        from: from,
        to: to,
        subject: subject,
        text: message + message1
        
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error)
        }else{
            console.log("Email sent:" + info.response)
        }
        response.redirect("/")
    })
})



//Initialize web server 
server.listen(port, function(){
    console.log("starting server on port" + port)
})
console.clear()
