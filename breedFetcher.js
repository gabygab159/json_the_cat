const { stdout } = require('process');
const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
const urlString = "https://api.thecatapi.com/v1/breeds/search?q=" + (breedName);
  
  
  request(urlString, (error, response, body) => {
   
    if (error) {
      callback(error, null);
      return;
    }
      
    const data = JSON.parse(body);
    const catDescription = data[0];
        
    if (!catDescription) {
      callback("Breed not found", null);
    } else {
      callback(null, catDescription.description);
    }
  });
  
};



module.exports = { fetchBreedDescription }