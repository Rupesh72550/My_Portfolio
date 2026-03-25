const fs = require('fs');
const pdf = require('pdf-parse');

let dataBuffer = fs.readFileSync('C:/Users/Rupesh kumar Gupta/Downloads/portfolio/src/resume/Rupesh_Kumar_Gupta_Resume.pdf.pdf');

pdf(dataBuffer).then(function(data) {
    console.log(data.text);
}).catch(err => console.error("Error reading PDF:", err));
