"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/test";
exports.ids = ["pages/api/test"];
exports.modules = {

/***/ "ejs":
/*!**********************!*\
  !*** external "ejs" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("ejs");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "(api)/./pages/api/test.js":
/*!***************************!*\
  !*** ./pages/api/test.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ejs */ \"ejs\");\n/* harmony import */ var ejs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ejs__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nasync function handler(req, res) {\n    console.log(\"SENDING:\", JSON.stringify(req.body));\n    const response = await fetch(\"https://us-central1-tsion-consulting.cloudfunctions.net/helloHttp\", {\n        method: \"POST\",\n        headers: {\n            \"Content-Type\": \"application/json\"\n        },\n        body: JSON.stringify(req.body)\n    });\n    if (response.status == 250) {\n        const blob = await response.blob();\n        // const pdfBlob = new Blob([blob], { type: 'application/pdf' });\n        const arrBuff = await blob.arrayBuffer();\n        const buff = Buffer.from(arrBuff);\n        res.setHeader(\"Content-Type\", \"application/pdf\");\n        res.setHeader(\"Content-Disposition\", \"attachment; filename=signed agreement.pdf\");\n        return res.status(250).send(Buffer.from(buff));\n    } else {\n        console.log(\"ERR RES:\", response);\n        return res.status(404).json({\n            error: err,\n            renderedHtml\n        });\n    }\n// const templatesDir = path.join(process.cwd(), 'templates');\n// var html = fs.readFileSync(templatesDir + '/toPdf.html', 'utf8');\n// var options = { format: 'A4', base: \"http://\" + req.headers.host, dpi: \"300\", };\n// let renderedHtml = ejs.render(html, { form: req.body })\n// const response = await fetch(\n//   `https://api.html2pdf.app/v1/generate?html=https://example.com&apiKey=X77C4zkdv6qiqjAnc8oOj5vP68Figw6k7bQer5N4ArxrfbrE40UPkNuuSpyrB11X`,\n//   // {\n//   //   method: 'POST',\n//   //   body: JSON.stringify({\n//   //     html: renderedHtml,\n//   //     apiKey: \"X77C4zkdv6qiqjAnc8oOj5vP68Figw6k7bQer5N4ArxrfbrE40UPkNuuSpyrB11X\"\n//   //   }),\n//   // }\n// )\n// const resJson = await response.data()\n// const response = await fetch(\n//   `https://selectpdf.com/api2/convert/`,\n//   {\n//     method: 'POST',\n//     headers: {\n//       'Content-Type': 'application/json'\n//     },\n//     body: JSON.stringify({\n//       key: '6a8128bf-eb03-474f-8a6a-7b420109b566',\n//       // url: 'https://google.com'\n//       html: renderedHtml,\n//       \"base_url\": \"https://tsionconsulting.netlify.app\"\n//     })\n//   }\n// )\n// if (response.status == 200) {\n//   const blob = await response.blob()\n//   // const pdfBlob = new Blob([blob], { type: 'application/pdf' });\n//   const arrBuff = await blob.arrayBuffer()\n//   const buff = Buffer.from(arrBuff)\n//   res.setHeader('Content-Type', 'application/pdf');\n//   res.setHeader('Content-Disposition', 'attachment; filename=signed agreement.pdf');\n//   return res.status(250).send(Buffer.from(buff));\n// }\n// console.log(\"RESPONSE:\", response)\n// res.json({ status: response.status })\n// res.send(response.data)\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGVzdC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQXVCO0FBQ0o7QUFDRTtBQUVOLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDQyxRQUFRQyxHQUFHLENBQUMsWUFBWUMsS0FBS0MsU0FBUyxDQUFDTCxJQUFJTSxJQUFJO0lBQy9DLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIscUVBQ0E7UUFDRUMsUUFBUTtRQUNSQyxTQUFTO1lBQ1AsZ0JBQWdCO1FBQ2xCO1FBQ0FKLE1BQU1GLEtBQUtDLFNBQVMsQ0FBQ0wsSUFBSU0sSUFBSTtJQUMvQjtJQUlGLElBQUlDLFNBQVNJLE1BQU0sSUFBSSxLQUFLO1FBQzFCLE1BQU1DLE9BQU8sTUFBTUwsU0FBU0ssSUFBSTtRQUNoQyxpRUFBaUU7UUFDakUsTUFBTUMsVUFBVSxNQUFNRCxLQUFLRSxXQUFXO1FBQ3RDLE1BQU1DLE9BQU9DLE9BQU9DLElBQUksQ0FBQ0o7UUFFekJaLElBQUlpQixTQUFTLENBQUMsZ0JBQWdCO1FBQzlCakIsSUFBSWlCLFNBQVMsQ0FBQyx1QkFBdUI7UUFDckMsT0FBT2pCLElBQUlVLE1BQU0sQ0FBQyxLQUFLUSxJQUFJLENBQUNILE9BQU9DLElBQUksQ0FBQ0Y7SUFDMUMsT0FBTztRQUNMYixRQUFRQyxHQUFHLENBQUMsWUFBWUk7UUFDeEIsT0FBT04sSUFBSVUsTUFBTSxDQUFDLEtBQUtTLElBQUksQ0FBQztZQUFFQyxPQUFPQztZQUFLQztRQUFhO0lBQ3pELENBQUM7QUFFRCw4REFBOEQ7QUFDOUQsb0VBQW9FO0FBQ3BFLG1GQUFtRjtBQUVuRiwwREFBMEQ7QUFFMUQsZ0NBQWdDO0FBQ2hDLDZJQUE2STtBQUM3SSxTQUFTO0FBQ1QseUJBQXlCO0FBQ3pCLGdDQUFnQztBQUNoQywrQkFBK0I7QUFDL0Isc0ZBQXNGO0FBQ3RGLGFBQWE7QUFDYixTQUFTO0FBQ1QsSUFBSTtBQUVKLHdDQUF3QztBQUV4QyxnQ0FBZ0M7QUFDaEMsMkNBQTJDO0FBQzNDLE1BQU07QUFDTixzQkFBc0I7QUFDdEIsaUJBQWlCO0FBQ2pCLDJDQUEyQztBQUMzQyxTQUFTO0FBQ1QsNkJBQTZCO0FBQzdCLHFEQUFxRDtBQUNyRCxxQ0FBcUM7QUFDckMsNEJBQTRCO0FBQzVCLDBEQUEwRDtBQUMxRCxTQUFTO0FBQ1QsTUFBTTtBQUNOLElBQUk7QUFFSixnQ0FBZ0M7QUFDaEMsdUNBQXVDO0FBQ3ZDLHNFQUFzRTtBQUN0RSw2Q0FBNkM7QUFDN0Msc0NBQXNDO0FBRXRDLHNEQUFzRDtBQUN0RCx1RkFBdUY7QUFDdkYsb0RBQW9EO0FBQ3BELElBQUk7QUFHSixxQ0FBcUM7QUFDckMsd0NBQXdDO0FBQ3hDLDBCQUEwQjtBQUM1QixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHNpb24tY29uc3VsdGluZy8uL3BhZ2VzL2FwaS90ZXN0LmpzPzZlN2EiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIlxuaW1wb3J0IGZzIGZyb20gXCJmc1wiXG5pbXBvcnQgZWpzIGZyb20gXCJlanNcIlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnNvbGUubG9nKFwiU0VORElORzpcIiwgSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpLClcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAnaHR0cHM6Ly91cy1jZW50cmFsMS10c2lvbi1jb25zdWx0aW5nLmNsb3VkZnVuY3Rpb25zLm5ldC9oZWxsb0h0dHAnLFxuICAgIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVxLmJvZHkpLFxuICAgIH1cbiAgKVxuXG5cbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyNTApIHtcbiAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpXG4gICAgLy8gY29uc3QgcGRmQmxvYiA9IG5ldyBCbG9iKFtibG9iXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vcGRmJyB9KTtcbiAgICBjb25zdCBhcnJCdWZmID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpXG4gICAgY29uc3QgYnVmZiA9IEJ1ZmZlci5mcm9tKGFyckJ1ZmYpXG5cbiAgICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vcGRmJyk7XG4gICAgcmVzLnNldEhlYWRlcignQ29udGVudC1EaXNwb3NpdGlvbicsICdhdHRhY2htZW50OyBmaWxlbmFtZT1zaWduZWQgYWdyZWVtZW50LnBkZicpO1xuICAgIHJldHVybiByZXMuc3RhdHVzKDI1MCkuc2VuZChCdWZmZXIuZnJvbShidWZmKSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5sb2coXCJFUlIgUkVTOlwiLCByZXNwb25zZSlcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDQpLmpzb24oeyBlcnJvcjogZXJyLCByZW5kZXJlZEh0bWwgfSlcbiAgfVxuXG4gIC8vIGNvbnN0IHRlbXBsYXRlc0RpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAndGVtcGxhdGVzJyk7XG4gIC8vIHZhciBodG1sID0gZnMucmVhZEZpbGVTeW5jKHRlbXBsYXRlc0RpciArICcvdG9QZGYuaHRtbCcsICd1dGY4Jyk7XG4gIC8vIHZhciBvcHRpb25zID0geyBmb3JtYXQ6ICdBNCcsIGJhc2U6IFwiaHR0cDovL1wiICsgcmVxLmhlYWRlcnMuaG9zdCwgZHBpOiBcIjMwMFwiLCB9O1xuXG4gIC8vIGxldCByZW5kZXJlZEh0bWwgPSBlanMucmVuZGVyKGh0bWwsIHsgZm9ybTogcmVxLmJvZHkgfSlcblxuICAvLyBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxuICAvLyAgIGBodHRwczovL2FwaS5odG1sMnBkZi5hcHAvdjEvZ2VuZXJhdGU/aHRtbD1odHRwczovL2V4YW1wbGUuY29tJmFwaUtleT1YNzdDNHprZHY2cWlxakFuYzhvT2o1dlA2OEZpZ3c2azdiUWVyNU40QXJ4cmZickU0MFVQa051dVNweXJCMTFYYCxcbiAgLy8gICAvLyB7XG4gIC8vICAgLy8gICBtZXRob2Q6ICdQT1NUJyxcbiAgLy8gICAvLyAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgLy8gICAvLyAgICAgaHRtbDogcmVuZGVyZWRIdG1sLFxuICAvLyAgIC8vICAgICBhcGlLZXk6IFwiWDc3QzR6a2R2NnFpcWpBbmM4b09qNXZQNjhGaWd3Nms3YlFlcjVONEFyeHJmYnJFNDBVUGtOdXVTcHlyQjExWFwiXG4gIC8vICAgLy8gICB9KSxcbiAgLy8gICAvLyB9XG4gIC8vIClcblxuICAvLyBjb25zdCByZXNKc29uID0gYXdhaXQgcmVzcG9uc2UuZGF0YSgpXG5cbiAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgLy8gICBgaHR0cHM6Ly9zZWxlY3RwZGYuY29tL2FwaTIvY29udmVydC9gLFxuICAvLyAgIHtcbiAgLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuICAvLyAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gIC8vICAgICB9LFxuICAvLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAvLyAgICAgICBrZXk6ICc2YTgxMjhiZi1lYjAzLTQ3NGYtOGE2YS03YjQyMDEwOWI1NjYnLFxuICAvLyAgICAgICAvLyB1cmw6ICdodHRwczovL2dvb2dsZS5jb20nXG4gIC8vICAgICAgIGh0bWw6IHJlbmRlcmVkSHRtbCxcbiAgLy8gICAgICAgXCJiYXNlX3VybFwiOiBcImh0dHBzOi8vdHNpb25jb25zdWx0aW5nLm5ldGxpZnkuYXBwXCJcbiAgLy8gICAgIH0pXG4gIC8vICAgfVxuICAvLyApXG5cbiAgLy8gaWYgKHJlc3BvbnNlLnN0YXR1cyA9PSAyMDApIHtcbiAgLy8gICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpXG4gIC8vICAgLy8gY29uc3QgcGRmQmxvYiA9IG5ldyBCbG9iKFtibG9iXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vcGRmJyB9KTtcbiAgLy8gICBjb25zdCBhcnJCdWZmID0gYXdhaXQgYmxvYi5hcnJheUJ1ZmZlcigpXG4gIC8vICAgY29uc3QgYnVmZiA9IEJ1ZmZlci5mcm9tKGFyckJ1ZmYpXG5cbiAgLy8gICByZXMuc2V0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vcGRmJyk7XG4gIC8vICAgcmVzLnNldEhlYWRlcignQ29udGVudC1EaXNwb3NpdGlvbicsICdhdHRhY2htZW50OyBmaWxlbmFtZT1zaWduZWQgYWdyZWVtZW50LnBkZicpO1xuICAvLyAgIHJldHVybiByZXMuc3RhdHVzKDI1MCkuc2VuZChCdWZmZXIuZnJvbShidWZmKSk7XG4gIC8vIH1cblxuXG4gIC8vIGNvbnNvbGUubG9nKFwiUkVTUE9OU0U6XCIsIHJlc3BvbnNlKVxuICAvLyByZXMuanNvbih7IHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzIH0pXG4gIC8vIHJlcy5zZW5kKHJlc3BvbnNlLmRhdGEpXG59Il0sIm5hbWVzIjpbInBhdGgiLCJmcyIsImVqcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsImJvZHkiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsInN0YXR1cyIsImJsb2IiLCJhcnJCdWZmIiwiYXJyYXlCdWZmZXIiLCJidWZmIiwiQnVmZmVyIiwiZnJvbSIsInNldEhlYWRlciIsInNlbmQiLCJqc29uIiwiZXJyb3IiLCJlcnIiLCJyZW5kZXJlZEh0bWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/test.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/test.js"));
module.exports = __webpack_exports__;

})();