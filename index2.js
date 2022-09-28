var nodemailer = require('nodemailer');
var mailerhbs = require('nodemailer-express-handlebars');

var mailer = nodemailer.createTransport({
    service: Gmail,  // More at https://nodemailer.com/smtp/well-known/#supported-services
    auth: {
        user: 'USERNAME@gmail.com', // Your email id
        pass: 'PASSWORD' // Your password
    }
});

mailer.use('compile', mailerhbs({
    viewPath: 'img', //Path to email template folder
    extName: '.html' //extendtion of email template
}));

mailer.sendMail({
    from: 'Your name username@domain.com',
    to: user.local.email,
    subject: 'Reset your password',
    template: 'password_reset', //Name email file template
    context: { // pass variables to template
        hostUrl: req.headers.host,
        customeName: user.info.firstname + ' ' + user.info.lastname,
        resetUrl: req.headers.host + '/users/recover/' + token,
        resetCode: token
    }
}, function (err, response) {
    if (err) {
        res.send('Error send email, please contact administrator to best support.');
    }
    res.send('Email send successed to you email' + req.body.email + '.');
    done(err, 'done');
});