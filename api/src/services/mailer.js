const nodemailer = require("nodemailer");

const {MAIL_APP_PASS } = process.env;


 const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
      user: "carrycars.info@gmail.com", 
      pass: MAIL_APP_PASS, 
    },
  });

 const sendMAil = async (email) => { await transporter.sendMail({
    from: 'CarryCars <carrycars.info@gmail.com>', 
    to: `${email}`, 
    subject: "Gracias Por confiar en Carry", 
    //  text: "Hello world?", // plain text body
    html: "<h1> gracias por su compra </h1>", // html body
  })}
  module.exports={
    sendMAil
  }
