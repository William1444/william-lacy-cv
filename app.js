var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//provided by heroku
app.set('port', (process.env.PORT || 5000));

app.use(bodyParser());       // to support JSON-encoded bodies

app.use(express.static('public'));

app.use('/bower_components',express.static('bower_components'));


var nodemailer = require('nodemailer');

// create reusable transporter object using the default SMTP transport
var transporter = nodemailer.createTransport('smtps://'+ process.env.ADMIN_EMAIL_ADDRESS + ':' + process.env.ADMIN_EMAIL_PASS +'@' + (process.env.SMTP_SERVER || 'smtp.gmail.com'));

app.post('/contact',function(req,res,next){
    var b = req.body;
    console.info('contact received');
    console.info(b);
    var mailOptionsAdmin = {
        from: b.name + ' <' + b.email + '>', // sender address
        to: 'williamlacycvsite@gmail.com', // list of receivers
        subject: 'Contact', // Subject line
        text: b.message + '\n\n' + b.email + '\n\n' + b.phone
    };
    var mailOptionsRequestNotification = {
        from: 'William Lacy <contact@williamlacy.uk>', // sender address
        to: b.email, // list of receivers
        subject: '[NO-REPLY] Thank you for your interest!', // Subject line
        text: 'Hi\n \n This is an automated reply but don\'t let that put you off!\n\nI\'ll be in touch soon!\n\nMany thanks\n\nWilliam Lacy'
    };

    transporter.sendMail(mailOptionsRequestNotification, function(error, info){
        if(error){
            console.error('Confirmation message failed');
            console.error(error);
            return res.status(500).send('error');
        }
        console.log('Confirmation message sent: ' + info.response);
        transporter.sendMail(mailOptionsAdmin, function(error, info){
            if(error){
                res.status(500).send('error');
                console.error('Failed to send Admin message');
                return console.error(error);
            }
            console.log('Admin message sent: ' + info.response);
            return res.status(200).send('success');
        });
    });
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});