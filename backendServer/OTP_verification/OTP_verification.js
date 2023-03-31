const nodemailer = require('nodemailer')


function sendOTP (email) {
    const OTP = `${Math.floor(1000 + Math.random() * 9000)}`;
    // req.session.OTP = OTP;
    var transporter = nodemailer.createTransport({
        service: " gmail",
        auth: {
          user: "magnuspubliclibrary@gmail.com",
          pass: "nxeddjugqenzjnkn", 
        },
      });
      var mailOptions = {
        from: "magnuspubliclibrary@gmail.com",
        to: email,
        subject: " otp for registration",
        text: `${OTP} `,
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
         let  message= "Email doesn't exist"
          return  message
           
        
       
    } else {
      console.log("Email sent" + info.response);
      console.log(OTP);
}
      })
    }

    module.exports = {sendOTP }