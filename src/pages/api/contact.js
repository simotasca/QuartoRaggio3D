export default function Kosher(req, res) {
  // yarn add dotenv
  // require('dotenv').config()

  // per ragioni di sicurezza creare una mail fasulla
  // con cui fare il login e che invia tutto alla tua email reale

  console.log(req.body)

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: 'mailservice.quarto.raggio@gmail.com',
      pass: 'mailservice123'
      //pass: process.env.password,
    },
    secure: true,
  })

  const mailData = {
    from: 'mailservice.quarto.raggio@gmail.com',
    to: 'consulti.quarto.raggio@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + " | Sent from: " + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`
  }

  transporter.sendMail(mailData, function (err, info) {
    if (err) {
      console.log("WEEH ERROR")
      console.log(err)
    }
    else
      console.log(info)
  })

  res.status(200);
  res.end();
}



