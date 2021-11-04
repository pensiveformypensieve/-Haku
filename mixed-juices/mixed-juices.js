// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

const PURE_STRAWBERRY_JOY = 0.5;
const ENERGIZER = 1.5;
const GREEN_GARDEN = 1.5;
const TROPICAL_ISLAND = 3;
const ALL_OR_NOTHING = 5;
const OTHERS = 2.5;
const SMALL_LIME = 6;
const MEDIUM_LIME = 8;
const LARGE_LIME = 10;
const SMALL = 'small';
const MEDIUM = 'medium';
const LARGE = 'large';

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  console.log("time to mix juice");
  // throw new Error('Please implement the timeToMixJuice function');
  switch(name){
    case 'Pure Strawberry Joy':
      return PURE_STRAWBERRY_JOY;
    case 'Energizer':
      return ENERGIZER;
    case 'Green Garden':
      return GREEN_GARDEN;
    case 'Tropical Island':
      return TROPICAL_ISLAND;
    case 'All or Nothing':
      return ALL_OR_NOTHING;
    default:
      return OTHERS;
  }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  console.log("limes to cut");
  // throw new Error('Please implement the limesToCut function');
  let i = 0;
  while (wedgesNeeded > 0 && limes.length > 0) {
      console.log("lime size:", limes[i]);
      switch (limes[i]) {
        case SMALL:
          wedgesNeeded -= SMALL_LIME;
          break;
        case MEDIUM:
          wedgesNeeded -= MEDIUM_LIME;
          break;
        case LARGE:
          wedgesNeeded -= LARGE_LIME;
          break;
      }
      console.log("wedges needed:", wedgesNeeded);
    if(i>=limes.length){
      break;
    } else {
      i++;
    }
  }

  return i;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  console.log("remaining orders");
  // throw new Error('Please implement the remainingOrders function');
  let i = 0;
  while(timeLeft > 0){
    switch(orders[i]){
      case 'Pure Strawberry Joy':
        timeLeft -= PURE_STRAWBERRY_JOY;
        break;
      case 'Energizer':
      case 'Green Garden':
        timeLeft -= GREEN_GARDEN;
        break;
      case 'Tropical Island':
        timeLeft -= TROPICAL_ISLAND;
        break;
      case 'All or Nothing':
        timeLeft -= ALL_OR_NOTHING;
        break;
      default:
        timeLeft -= OTHERS;
        break;
    }

    if(i>=orders.length){
      break;
    } else {
      i++;
    }
  }

  return orders.slice(i,orders.length);
}
