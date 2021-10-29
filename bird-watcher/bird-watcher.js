// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const DAYS_IN_A_WEEK = 7;

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  // throw new Error('Please implement the totalBirdCount function');
  let i = 0;
  let totalBirdCount = 0;
  for(i;i<birdsPerDay.length;i++){
    totalBirdCount += birdsPerDay[i];
  }
  return totalBirdCount;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  // throw new Error('Please implement the birdsInWeek function');
  const START_DAY = (week-1)*DAYS_IN_A_WEEK;
  let birdsInWeek = 0;
  if(START_DAY < birdsPerDay.length){
    for(let i=START_DAY; i<(START_DAY+7) && i<birdsPerDay.length; i++){
      birdsInWeek += birdsPerDay[i];
    }
  }
  return birdsInWeek;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  // throw new Error('Please implement the fixBirdCountLog function');
  let i = 0;
  for(i;i<birdsPerDay.length;i++){
    if(i%2==0) {
      birdsPerDay[i] += 1;
    }
  }
  return birdsPerDay;
}
