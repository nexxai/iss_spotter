const nextISSTimesForMyLocation = require("./iss_promised");
const getPassTimes = require("./getPassTimes");

nextISSTimesForMyLocation()
  .then((passTimes) => {
    getPassTimes(passTimes);
  })
  .catch((error) => {
    console.log(`Something went wrong: ${error.message}`);
  });
