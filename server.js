const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/test', (req, res, next) => {
    next();
});

app.get('/test', (req, res, next) => {
    res.end('<h1>Hello!</h1>');
});

app.get('/profile/:id/:name', (req, res, next) => {
    res.send(`Hello, you are user ${req.params.name} with # ${req.params.id}`);
});

app.use('/test', (err, req, res, next) => {
    res.status(500).send(`Some error: ${err}`);
});

app.get('/newform', (req, res, next) => {
    res.sendFile(__dirname + '/public/form/index.html');
});

app.post('/form', (req, res, next) => {
    nodemailer.createTestAccount().then(acc => {
        return nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
              user: acc.user, // generated ethereal user
              pass: acc.pass, // generated ethereal password
            },
          });
    }).then(transport => {
        return transport.sendMail({
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: req.body.email, // list of receivers
            subject: `You got message from ${req.body.name}`, // Subject line
            text: req.body.message,
            html: '<h1>Hello!</h1>' // html body
          })
    }).then(info => {
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        res.redirect('/');
    })
});

app.post('/comments', (req, res, next) => {
    res.status(200).send(JSON.stringify(req.body, null, 4));
});
app.listen(3000);