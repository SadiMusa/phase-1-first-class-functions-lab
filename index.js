// Code your solution in this file!
// helpers.js

// Function to return the first two drivers from the passed-in array
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Function to return the last two drivers from the passed-in array
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Array containing functions for selecting drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Function to create a fare multiplier
function createFareMultiplier(multiplier) {
  return function (fare) {
      return fare * multiplier;
  };
}

// Function to double the fare
function fareDoubler(fare) {
  return createFareMultiplier(2)(fare);
}

// Function to triple the fare
function fareTripler(fare) {
  return createFareMultiplier(3)(fare);
}

// Function to select different drivers based on the provided function
function selectDifferentDrivers(drivers, selectingFunction) {
  return selectingFunction(drivers);
}

module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
};
