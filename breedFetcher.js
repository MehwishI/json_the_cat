const request = require("request");

const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      // console.log("error:", error); // Print the error if one occurred
      return;
    }
    //converting string body into JSON object (deserialization)
    const data = JSON.parse(body);
    const breed = data[0];

    if (breed) {
      callback(null, breed.description);
    } else {
      callback("Breed not found!", null);
    }

    return data;
  });
};
module.exports = { fetchBreedDescription };
