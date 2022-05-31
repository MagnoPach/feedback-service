"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailApdater = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7ef19bf21522ae",
        pass: "37c38a29f1d769"
    }
});
class NodemailerMailApdater {
    async sendMail({ subject, body }) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Magno Cruz <magnopacheco67@gmail.com>',
            subject: subject,
            html: body
        });
    }
    ;
}
exports.NodemailerMailApdater = NodemailerMailApdater;
