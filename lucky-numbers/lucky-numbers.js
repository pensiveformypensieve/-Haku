// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  // throw new Error('Implement the twoSum function');
  let num1 = Number(array1.toString().replace(/,/g,''));
  let num2 = Number(array2.toString().replace(/,/g, ''));

  return num1 + num2;

}

/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean}  whether the number is a palindrome or not
 */
export function luckyNumber(value) {
  // throw new Error('Implement the luckyNumber function');
  console.log(value);
  let reversedValue = value.toString().split("").reverse().join("");
  console.log(reversedValue);
  let midpoint = Math.floor(value.toString().length/2);
  console.log(midpoint);
  if(value.toString().slice(0, midpoint)===reversedValue.slice(0, midpoint)){
    return true;
  }else{
    return false;
  }
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  // throw new Error('Implement the errorMessage function');
  let message = ''
  if (!input) {
    message = 'Required field';
  } else if (isNaN(Number(input)) || Number(input) === 0) {
    message = 'Must be a number besides 0';
  }
  return message
}
