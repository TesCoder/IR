import vCardsJS from 'vcards-js';
import { sendEmail } from './utils/sendEmail';

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

  const filename = `${prefix} ${fname} ${lname}.vcf`
  const emailOptions = {
    subject: `Contact Form Submission`,
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
        filename: filename,
        contentType: `text/vcard`,
        content: vCard.getFormattedString()
      },
    ],
  };

  const result = await sendEmail(emailOptions);
  console.log('Result:', result);
  if (result.success) {
    return res.status(250).json(result)
  } else {
    return res.status(404).json(result)
  }
}