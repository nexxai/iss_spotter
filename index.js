// index.js
const { nextISSTimesForMyLocation } = require("./iss");

const getPassTimes = function(passTimes) {
  passTimes.forEach((pass) => {
    let dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    let duration = pass.duration;

    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  });
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  getPassTimes(passTimes);
});
