const fs=require('fs');const pdf=require('pdf-parse');pdf(fs.readFileSync('../src/resume/Rupesh_Kumar_Gupta_Resume.pdf.pdf')).then(c=>console.log(c.text)).catch(console.error);
