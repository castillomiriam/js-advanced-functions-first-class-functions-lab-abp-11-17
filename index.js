const returnFirstTwoDrivers = function (drivers){
 return drivers.slice(0,2);
 };

const returnLastTwoDrivers = function  (drivers){
  return drivers.slice(2,4);
};

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers
];

const createFareMultiplier = function(multiplier){
  return function (fare) {
  return multiplier * fare;
}
}

const fareDoubler = function(doubler){
  return function (fare){
  return doubler * fare;
}
