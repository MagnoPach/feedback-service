import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "7ef19bf21522ae",
        pass: "37c38a29f1d769"
    }
});

export class NodemailerMailApdater implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from: 'Equipe Feedget <oi@feedget.com>',
            to: 'Magno Cruz <magnopacheco67@gmail.com>',
            subject: subject,
            html: body
        });
    };
}