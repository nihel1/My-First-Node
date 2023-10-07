
//const fs=require("fs")
//const data=fs.readFileSync("welcome.txt")
//console.log(data.toString())

const fs = require('fs');

fs.readFile('welcome.txt', 'utf8', (err, data) => {   // 'utf8' is the character encoding format used for text data
  if (err) {
    console.error('Error reading the file:', err);
  } else {
    console.log(data); // data is a string containing the file's content
  }
});

