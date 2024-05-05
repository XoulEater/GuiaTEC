"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer")); //enviar correos
require("dotenv").config();
const transporter = nodemailer_1.default.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PWD,
    },
});
class Email {
    sendMail(to, subject, text) {
        return __awaiter(this, void 0, void 0, function* () {
            const info = yield transporter.sendMail({
                from: "<mariana.viquez.monge@gmail.com>", // sender address
                to: to, // list of receivers
                subject: subject, // Subject line
                text: text, // plain text body
            });
        });
    }
}
exports.default = Email;
//# sourceMappingURL=sendEmail.js.map