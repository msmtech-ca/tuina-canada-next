import nodemailer from "nodemailer"
import { AttachmentLike } from "nodemailer/lib/mailer";
import { Readable } from "stream";

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || ``),
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
    }
})

export async function sendTransactionalEmail(to: string, subject: string, html: string | Buffer | Readable | AttachmentLike | undefined) {

    const options = {
        from: process.env.TRANSACTIONAL_EMAIL_FROM,
        to: to,
        subject: subject,
        html: html,
    };
    
    await transporter.sendMail(options);

}
