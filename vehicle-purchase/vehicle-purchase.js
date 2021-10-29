// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const LESS_THAN_3_YEARS = 0.8;
const LESS_THAN_10_YEARS = 0.7;
const MORE_THAN_10_YEARS = 0.5;

/**
 * Determines whether or not you need a licence to operate a certain kind of vehicle.
 *
 * @param {string} kind
 * @returns {boolean} whether a license is required
 */
export function needsLicense(kind) {
  // throw new Error('Please implement the needsLicense function');
  return (kind==='car'||kind==='truck')? true: false;
}

/**
 * Helps choosing between two options by recommending the one that
 * comes first in dictionary order.
 *
 * @param {string} option1
 * @param {string} option2
 * @returns {string} a sentence of advice which option to choose
 */
export function chooseVehicle(option1, option2) {
  // throw new Error('Please implement the chooseVehicle function');
  if(option1 < option2){
    return option1 + ' is clearly the better choice.';
  }else{
    return option2 + ' is clearly the better choice.';
  }
}

/**
 * Calculates an estimate for the price of a used vehicle in the dealership
 * based on the original price and the age of the vehicle.
 *
 * @param {number} originalPrice
 * @param {number} age
 * @returns expected resell price in the dealership
 */
export function calculateResellPrice(originalPrice, age) {
  // throw new Error('Please implement the calculateResellPrice function');
  if(age > 10){
    return originalPrice*MORE_THAN_10_YEARS;
  }else if(age >= 3 && age <= 10){
    return originalPrice*LESS_THAN_10_YEARS;
  }else{
    return originalPrice*LESS_THAN_3_YEARS;
  }

}

