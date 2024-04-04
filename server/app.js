const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

app.use(cors({
    origin: "*",
  }))

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});

app.post('/sendemail', (req, res)=>{
    const {name, text, email} = req.body
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.MAIL_FROM,
          pass: process.env.MAIL_PASSWORD 
        }
    });
    
    var mailOptions = {
        from: process.env.MAIL_FROM,
        to: process.env.MAIL_TO,
        subject: `Message from ${name}, ${email}`,
        text: text
    };
    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            res.json({
                status: 500,
                error: error,
            })
        } else {
            res.json({
                status: 200,
                info: info
            })
        }
    });
})
