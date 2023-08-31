const getPassTimes = function(passTimes) {
  passTimes.forEach((pass) => {
    let dateTime = new Date(0);
    dateTime.setUTCSeconds(pass.risetime);
    let duration = pass.duration;

    console.log(`Next pass at ${dateTime} for ${duration} seconds!`);
  });
};

module.exports = getPassTimes;
