import vCardsJS from 'vcards-js';
import nodemailer from 'nodemailer';

const { TITAN_EMAIL, TITAN_PASSWORD } = process.env;

const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

// IR-2021Oct30 Jane Doe
const today = new Date();
const prefix = 'IR-' + today.getFullYear() + months[today.getMonth()] + today.getDate();


const getVCard = ({ fname, lname, location, email, phone, year, contact, option, info, heard, service }) => {
  const vCard = vCardsJS();

  vCard.firstName = prefix + ' ' + fname;
  vCard.lastName = lname;
  vCard.email = email;
  vCard.cellPhone = phone;
  vCard.note = `
    Name: ${fname} ${lname}
    City, State: ${location}
    Email: ${email}
    Phone: ${phone}
    Preferred Contact Method: ${contact}
    Which option interests you?: ${option}
    How did you hear about Ivy Ready?: ${heard}
    What would you like to know more about?: ${info}
    Current Year: ${year}
    Service Requested: ${service}
  `;

  return vCard;
}

export default async function handler(req, res) {
  // res.status(200).json({ msg: "REACHED", data: req.body })
  const { fname, lname, location, email, phone, year, contact, option, info, heard, service } = req.body

  const vCard = getVCard({ fname, lname, location, email, phone, year, contact, option, info, heard, service })

  try {
    const transport = nodemailer.createTransport({
      host: "smtp.titan.email",
      port: 465,
      auth: {
        user: TITAN_EMAIL,
        pass: TITAN_PASSWORD
      }
    });

    const filename = prefix + ' ' + fname + ' ' + lname + '.vcf';

    const mailOptions = {
      from: `Ivy Ready <${TITAN_EMAIL}>`,
      to: email.trim(),
      subject: `Test Email`,
      html: `
      <ul>
        <li><strong>Name:</strong> ${fname} ${lname}</li>
        <li><strong>City, State:</strong> ${location}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Current Year:</strong> ${year}</li>
        <li><strong>Preferred Contact Method:</strong> ${contact}</li>
        <li><strong>Which option interests you?:</strong> ${option}</li>
        <li><strong>How did you hear about Ivy Ready?:</strong> ${heard}</li>
        <li><strong>What would you like to know more about?:</strong> ${info}</li>
        <li><strong>Service Requested:</strong> ${service}</li>
      </ul>
      `,
      attachments: [
        {
          filename: `${prefix} ${fname} ${lname}.vcf`,
          contentType: `text/vcard; name="${filename}"`,
          content: vCard.getFormattedString()
        },
      ],
    };

    const result = await transport.sendMail(mailOptions);
    console.log('Result:', result);
    return res.status(250).json({ message: `Message delivered to ${email}.` })
  } catch (e) {
    console.error(e);
    return res.status(404).json({ error: e.message })
  }
}