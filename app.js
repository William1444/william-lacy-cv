var express = require('express');
var app = express();
var bodyParser = require('body-parser')
app.use(bodyParser());       // to support JSON-encoded bodies

app.use(express.static('public'));

app.use('/bower_components',express.static('bower_components'));


var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://williamlacycvsite%40gmail.com:ukpo1234@smtp.gmail.com');

app.post('/contact',function(req,res,next){
    var b = req.body;
    console.info('contact received');
    console.info(b);
    var mailOptions = {
        from: b.name + ' <' + b.email + '>', // sender address
        to: 'williamlacycvsite@gmail.com', // list of receivers
        subject: 'Contact', // Subject line
        text: b.message + ' - ' + b.phone
    };
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return console.log(error);
            res.send('error');
        }
        console.log('Message sent: ' + info.response);
        res.send('sent');
    });
});

app.listen(3000,function(){
    console.info('listening on 3000');
})