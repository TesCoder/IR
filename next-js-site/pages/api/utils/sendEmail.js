// pages/api/utils/sendEmail.js

const { TITAN_EMAIL, TITAN_PASSWORD, RECIPIENT_EMAIL } = process.env;
import nodemailer from 'nodemailer';

export const sendEmail = async ({ subject, html, attachments }) => {
  try {
    // // Honeypot guard – reject if the hidden field is filled
    // if (middle_name && middle_name.trim() !== "") {
    //   return { success: false, error: "Bot submission blocked." };
    // }

    const transport = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465,
      auth: {
        user: TITAN_EMAIL,
        pass: TITAN_PASSWORD
      }
    });

    const mailOptions = {
      from: `Ivy Ready <${TITAN_EMAIL}>`,
      to: RECIPIENT_EMAIL,
      subject,
      html,
      attachments
    };

    const result = await transport.sendMail(mailOptions);
    return { success: true, message: `Message sent.` }
  } catch (e) {
    // console.error(e);
    return { success: false, error: e.message }
  }
}