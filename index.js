const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: ''
    port: 0,
    secure: false,
    auth: {
        user: 'asdasda@asdassd.com',
        pass: 'asdasdasd',
    }
});

transport.sendMail({
    from 'Manual do Dev'
})