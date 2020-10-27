// Exercise 3.1 - `getIssPosition`
// -----------------------------
const request = require("request-promise");
// require the 'request-promise' module.

// Returns the current position of the ISS
const getIssPosition = () => {
  // write some code...

  return request("http://api.open-notify.org/iss-now.json").then((response) => {
    const parsedResponse = JSON.parse(response);
    const position = {
      lat: parsedResponse.iss_position.latitude,
      lng: parsedResponse.iss_position.longitude,
    };
    return position;
  });
};

getIssPosition().then(
  (parsedResponse) => {
    console.log(parsedResponse);
  }
  //   console.log(parsedResponse.iss_position.latitude)
);
