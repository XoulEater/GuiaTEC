import nodemailer from "nodemailer"; //enviar correos
require("dotenv").config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PWD,
  },
});

export default class Email {
  public async sendMail(to: string, subject: string, text: string) {
    const info = await transporter.sendMail({
      from: "<mariana.viquez.monge@gmail.com>", // sender address
      to: to, // list of receivers
      subject: subject, // Subject line
      text: text, // plain text body
    });
  }
}
