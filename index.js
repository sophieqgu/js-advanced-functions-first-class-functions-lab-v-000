// Code your solution in this file!
const returnFirstTwoDrivers = function(array_of_drivers) {
  return array_of_drivers.slice(0, 2);
}

const returnLastTwoDrivers = function(array_of_drivers) {
  return array_of_drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(times) {
  return function(fare) {
    for (let i = 0; i < times; i++) {
      fare *= fare;
    }
    return fare;
  }
}

const fareDoubler = createFareMultiplier(2)(fare);

const fareTripler = createFareMultiplier(3)(fare);

function selectDifferentDrivers(array_of_drivers, selectingDrivers) {
  
}
