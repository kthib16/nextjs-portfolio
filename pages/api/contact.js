export default function (req, res){
  require('dotenv').config()

  let nodemailer = require('nodemailer')
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'kthibodeaux337@gmail.com',
      pass: process.env.password,
    },
    secure: true,

  });

  const mailData = {
    from: 'kthibodeaux337@gmail.com',
    to: 'kthib16@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: <div>{req.body.message}</div>
  }

  transporter.sendMail(mailData, function(err, info){
    if(err)
      console.log(err)
    else {
      console.log(info)
    }
  })

  res.status(200)
}
