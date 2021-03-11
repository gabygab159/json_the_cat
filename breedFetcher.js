const arg = process.argv.slice(2);
const fs = require('fs');
const { stdout } = require('process');
const request = require('request');


const urlString = "https://api.thecatapi.com/v1/breeds/search?q=" + (arg);

// console.log(urlString);

request(urlString, (error, response, body) => {
  console.log('error:', error);
  console.log('statusCode:', response && response.statusCode);
  // console.log('body:', body.length);
  // console.log("TYPE OF BODY--->" ,typeof body);
  // fs.writeFile(arg[1], body, 'utf8', () => {
  //   stdout.write(` ${body} \n`)
  // })
  const data = JSON.parse(body);
  const catDescription = data[0];
  console.log("cat description-->", catDescription);
  
  if (!catDescription) {
    stdout.write(`Error: ${error} `);
  } else {
    stdout.write(`Description: ${catDescription.description} \n`);
  }
});

// console.log('args -->', arg);

///////////
// use fs.writeFile() to write file
// return "Downloaded and saved x bytes to ./index.html" on the command line.