// livo user pass = 81)6k(HL5AHTiRoh
const express = require('express')
const nodemailer = require('nodemailer')
const pass = 'aqwtuicahkxbzfun'
// const host = window.location.hostname
const app = express()
// console.log(host);\


app.get('/', (req, res)=> {
    console.log(req.hostname);
})

console.log('Creating transporter');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
    secure: false,
    auth: {
        user: 'dumsdev@gmail.com',
        pass: pass
    },
    tls: {
        rejectUnauthorized: false,
    }
})

const mailOptions = {
    from: 'dumsdev@gmail.com',
    to: 'onyeaborliberate@gmail.com',
    subject: 'Dums',
    text: 'Hello from KimLiberate lols',
    replyTo: 'noreply.who@gmail.com'
};


transporter.sendMail(mailOptions, function(error, info) {
    if(error) {
        console.log("Mail not sent: ", error);
    } else {
        console.log('Mail sent: ', info);
    }
})


console.log('Verifying transporter');
transporter.verify(function (errr, success) {
    if(errr ) {
        console.log('Something went wrong: ', errr);
    } else {
        console.log('transporter is verified: ', success);
    }
})

app.listen(8080, ()=> {
    console.log('App is litening on port 8080');
})