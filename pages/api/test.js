import path from "path"
import fs from "fs"
import ejs from "ejs"

export default async function handler(req, res) {
  console.log("SENDING:", JSON.stringify(req.body),)
  const response = await fetch(
    'https://us-central1-tsion-consulting.cloudfunctions.net/helloHttp',
    {
      method: 'POST',
      body: JSON.stringify(req.body),
    }
  )


  if (response.status == 250) {
    const blob = await response.blob()
    // const pdfBlob = new Blob([blob], { type: 'application/pdf' });
    const arrBuff = await blob.arrayBuffer()
    const buff = Buffer.from(arrBuff)

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=signed agreement.pdf');
    return res.status(250).send(Buffer.from(buff));
  } else {
    console.log("ERR RES:", response)
    return res.status(404).json({ error: err, renderedHtml })
  }

  // const templatesDir = path.join(process.cwd(), 'templates');
  // var html = fs.readFileSync(templatesDir + '/toPdf.html', 'utf8');
  // var options = { format: 'A4', base: "http://" + req.headers.host, dpi: "300", };

  // let renderedHtml = ejs.render(html, { form: req.body })

  // const response = await fetch(
  //   `https://api.html2pdf.app/v1/generate?html=https://example.com&apiKey=X77C4zkdv6qiqjAnc8oOj5vP68Figw6k7bQer5N4ArxrfbrE40UPkNuuSpyrB11X`,
  //   // {
  //   //   method: 'POST',
  //   //   body: JSON.stringify({
  //   //     html: renderedHtml,
  //   //     apiKey: "X77C4zkdv6qiqjAnc8oOj5vP68Figw6k7bQer5N4ArxrfbrE40UPkNuuSpyrB11X"
  //   //   }),
  //   // }
  // )

  // const resJson = await response.data()

  // const response = await fetch(
  //   `https://selectpdf.com/api2/convert/`,
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       key: '6a8128bf-eb03-474f-8a6a-7b420109b566',
  //       // url: 'https://google.com'
  //       html: renderedHtml,
  //       "base_url": "https://tsionconsulting.netlify.app"
  //     })
  //   }
  // )

  // if (response.status == 200) {
  //   const blob = await response.blob()
  //   // const pdfBlob = new Blob([blob], { type: 'application/pdf' });
  //   const arrBuff = await blob.arrayBuffer()
  //   const buff = Buffer.from(arrBuff)

  //   res.setHeader('Content-Type', 'application/pdf');
  //   res.setHeader('Content-Disposition', 'attachment; filename=signed agreement.pdf');
  //   return res.status(250).send(Buffer.from(buff));
  // }


  // console.log("RESPONSE:", response)
  // res.json({ status: response.status })
  // res.send(response.data)
}