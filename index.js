const returnFirstTwoDrivers = function (drivers){
 return drivers.slice(0,2);
 };

const returnLastTwoDrivers = function  (drivers){
  return drivers.slice(2,4);
};

const selectingDrivers = [
  function () { returnFirstTwoDrivers; },
  function () { returnLastTwoDrivers; },
  ];
