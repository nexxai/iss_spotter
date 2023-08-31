// index.js
const { nextISSTimesForMyLocation } = require("./iss");
const getPassTimes = require("./getPassTimes");

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }

  getPassTimes(passTimes);
});
