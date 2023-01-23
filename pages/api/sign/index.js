import path from "path"
import fs from "fs"
import ejs from "ejs"
import pdf from "html-pdf"
// import puppeteer from 'puppeteer'
// import chrome from 'chrome-aws-lambda'

// export default async function handler(req, res) {

//   const templatesDir = path.join(process.cwd(), 'templates');
//   var html = fs.readFileSync(templatesDir + '/toPdf.html', 'utf8');
//   var options = { format: 'A4', base: "http://" + req.headers.host, dpi: "300", };

//   let renderedHtml = ejs.render(html, { form: req.body })

//   return new Promise((resolve, reject) => {
//     pdf.create(renderedHtml, options).toBuffer(function (err, buff) {
//       if (err) {
//         res.status(404).json({ error: err, renderedHtml })
//       } else {
//         res.setHeader('Content-Type', 'application/pdf');
//         res.setHeader('Content-Disposition', 'attachment; filename=signed agreement.pdf');
//         res.status(250).send(Buffer.from(buff)); // { filename: '/app/businesscard.pdf' }
//       }
//       resolve();
//     });

//   })
// }


// export default async function handler(req, res) {

//   const templatesDir = path.join(process.cwd(), 'templates');
//   var html = fs.readFileSync(templatesDir + '/toPdf.html', 'utf8');
//   // var options = { format: 'A4', base: "http://" + req.headers.host, dpi: "300", };
//   let options = { format: 'A4' };

//   let renderedHtml = ejs.render(html, { form: req.body })

//   htmlToPdf.generatePdf({ content: renderedHtml }, options).then(buff => {
//     // if (err) {
//     //   res.status(404).json({ error: err.message })
//     // } else {
//     res.setHeader('Content-Type', 'application/pdf');
//     res.setHeader('Content-Disposition', 'attachment; filename=signed agreement.pdf');
//     res.status(250).send(Buffer.from(buff));
//   });

// }

// let puppeteer;
// if (process.env.NODE_ENV === 'production') {
//   // running on the Vercel platform.
//   chrome = require('chrome-aws-lambda');
//   puppeteer = require('puppeteer-core');
// } else {
//   // running locally.
//   puppeteer = require('puppeteer');
// }

const chrome = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');


export default async function handler(req, res) {

  const templatesDir = path.join(process.cwd(), 'templates');
  var html = fs.readFileSync(templatesDir + '/toPdf.html', 'utf8');
  // var options = { format: 'A4', base: "http://" + req.headers.host, dpi: "300", };

  let renderedHtml = ejs.render(html, { form: req.body })


  const options =
    process.env.NODE_ENV === 'production'
      ? {
        args: chrome.args,
        executablePath: await chrome.executablePath,
        headless: true
      }
      : {
        args: [],
        executablePath:
          process.platform === "win32"
            ? "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe"
            : process.platform === "linux"
              ? "/usr/bin/google-chrome"
              : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        headless: true
      };

  // Create a browser instance
  const browser = await chrome.puppeteer.launch(
    options

    // process.env.NODE_ENV === 'production'
    //   ? {
    //     args: [...chrome.args, '--hide-scrollbars', '--disable-web-security'],
    //     defaultViewport: chrome.defaultViewport,
    //     executablePath: await chrome.executablePath,
    //     headless: true,
    //     ignoreHTTPSErrors: true,
    //   }
    //   : {
    //     args: ['--hide-scrollbars', '--disable-web-security'],
    //     headless: true,
    //     ignoreHTTPSErrors: true,
    //   }
  );

  // Create a new page
  const page = await browser.newPage();

  //Get HTML content from HTML file
  // const html = fs.readFileSync('sample.html', 'utf-8');
  await page.setContent(renderedHtml, { waitUntil: 'domcontentloaded' });

  // To reflect CSS used for screens instead of print
  await page.emulateMediaType('print');

  // Download the PDF
  const buff = await page.pdf({
    // path: 'result.pdf',
    margin: { top: '100px', right: '50px', bottom: '100px', left: '50px' },
    printBackground: true,
    format: 'A4',
  });

  // Close the browser instance
  await browser.close();

  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename=signed agreement.pdf');
  res.status(250).send(Buffer.from(buff)); // { filename: '/app/businesscard.pdf' }




  // return new Promise((resolve, reject) => {
  //   pdf.create(renderedHtml, options).toBuffer(function (err, buff) {
  //     if (err) {
  //       res.status(404).json({ error: err, renderedHtml })
  //     } else {
  //   res.setHeader('Content-Type', 'application/pdf');
  //   res.setHeader('Content-Disposition', 'attachment; filename=signed agreement.pdf');
  //   res.status(250).send(Buffer.from(buff)); // { filename: '/app/businesscard.pdf' }
  // }
  //     resolve();
  //   });

  // })
}
