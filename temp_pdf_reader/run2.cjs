const fs = require('fs');
const pdf = require('pdf-parse');
const pdfParser = pdf.default || pdf;
const dataBuffer = fs.readFileSync('../src/resume/Rupesh_Kumar_Gupta_Resume.pdf.pdf');
pdfParser(dataBuffer).then(data => console.log(data.text)).catch(console.error);
