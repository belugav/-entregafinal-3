const {
  transporterEthereal,
  transporterGmail,
} = require("../services/emailService");
const { emailHTML, newUserEmailContent } = require("../utils/emailHTML");
const nodemailer = require("nodemailer");

exports.etherealSendMail = async (emailData) => {
  try {
    let info = await transporterEthereal.sendMail({
      from: "royal.fahey54@ethereal.email",
      to: "belengavito1993ar@gmail.com",
      subject: `${emailData.message} ${emailData.date}`,
      html: emailHTML(emailData),
    });
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log(error);
  }
};

exports.etherealNewUserSendMail = async (emailData) => {
  try {
    let info = await transporterEthereal.sendMail({
      from: "royal.fahey54@ethereal.email",
      to: "belengavito1993ar@gmail.com",
      subject: `Nuevo usuario`,
      html: newUserEmailContent(emailData),
    });
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  } catch (error) {
    console.log(error);
  }
};

exports.gmailSendMail = async (data, emailContent) => {
  try {
    const { username, date, message, picture } = data;
    await transporterGmail.sendMail({
      from: "Servidor",
      to: "belengavito1993ar@gmail.com",
      subject: `${message} ${date}`,
      html: emailHTML({ username, date, message }),
      attachments: {
        // use URL as an attachment
        filename: "profilepic.jpeg",
        path: picture,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
