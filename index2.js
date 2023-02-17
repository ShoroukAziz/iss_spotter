const { nextISSTimesForMyLocation } = require('./iss_promised');

nextISSTimesForMyLocation()
.then((passTimes) => {
  
  passTimes.forEach(pass => {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    console.log(`Next pass at ${datetime} for ${pass.duration} seconds!`);

  });

})
.catch((error)=>{
  console.log("It didn't work: ", error.message);
});

