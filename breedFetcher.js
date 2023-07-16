const request = require("request");
const query = process.argv;

const url = `https://api.thecatapi.com/v1/breeds/search?q=${query[2]}`;
request(url, (error, response, body) => {
  if (error) {
    console.log("error:", error); // Print the error if one occurred
    return;
  }

  //if no such cat breed not found (by defalut length of body is 2, without cat breed name)
  if (body.length <= 2) {
    console.log(`The requested Cat Breed: "${query[2]}" not found`);
    return;
  }
  //converting string body into JSON object (deserialization)
  const data = JSON.parse(body);
  console.log(data);
});
