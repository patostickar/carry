const nodemailer = require("nodemailer");



 const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "carrycars.info@gmail.com", // generated ethereal user
      pass: "zramdabonklxcdst", // generated ethereal password
    },
  });

 const sendMAil = async (email) => { await transporter.sendMail({
    from: 'CarryCars <carrycars.info@gmail.com>', // sender address
    to: `${email}`, // list of receivers
    subject: "Gracias Por confiar en Carry", // Subject line
    //  text: "Hello world?", // plain text body
    html: "<h1> gracias por su compra </h1>", // html body
  })}
  module.exports={
    sendMAil
  }