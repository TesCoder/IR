import { GoogleSpreadsheet } from 'google-spreadsheet';

const { SPREADSHEET_ID, GOOGLE_CLIENT_EMAIL, GOOGLE_SERVICE_PRIVATE_KEY } = process.env

const doc = new GoogleSpreadsheet(SPREADSHEET_ID)

export const updateSheet = async ({ id, coach, type, fname, lname, location, email, phone, year, contact, option, info, heard, service }) => {
  console.log("REACHED UPDATE SHEET!")
  try {
    await doc.useServiceAccountAuth({
      client_email: GOOGLE_CLIENT_EMAIL,
      private_key: GOOGLE_SERVICE_PRIVATE_KEY
    });

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];
    const today = new Date();

    await sheet.addRow({
      Prospect: id,
      FirstName: fname,
      LastName: lname,
      ProvidedLocation: location,
      Email: email,
      Phone: phone,
      StudentYear: year,
      ContactMethod: contact.join(", "),
      Options: option.join(", "),
      InfoRequested: info.join(", "),
      ConvSource: heard.join(", "),
      Date: today.toLocaleDateString('en-US', { timeZone: 'America/Los_Angeles' }),
      Time: today.toLocaleTimeString('en-US', { timeZone: 'America/Los_Angeles' }),
      ConvType: "Form",
      StageDesc: "Form Submission",
      Stage: 0
    });
    return true
  } catch (e) {
    console.error("Error updating google sheet:", e)
  }
  return false
}