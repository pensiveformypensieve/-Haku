// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return(deck.map((num) => num*2));
  throw new Error('Implement the seeingDouble function');
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
 const triple = (value, arr) => {
   return arr.flatMap(x=>x===value? [x,x,x]:x);
 }
  return triple(3, deck);
  throw new Error('Implement the threeOfEachThree function');
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
 export function middleTwo(deck) {
  return deck.slice(4,6);
  throw new Error('Implement the middleTwo function');
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */
 export function sandwichTrick(deck) {
  deck.splice(deck.length/2, 0, deck[deck.length-1]);
  console.log(deck[deck.length-1]);
  deck.splice(deck.length/2+1, 0, deck[0]);
  console.log(deck[0]);
  deck.splice(0, 1);
  deck.splice(-1, 1);
  return deck;
  // throw new Error('Implement the sandwichTrick function');
}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
 export function twoIsSpecial(deck) {
  return deck.filter((num) => num === 2);
    // throw new Error('Implement the twoIsSpecial function');
  }

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
 export function perfectlyOrdered(deck) {
  deck.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});
  return deck;

  // throw new Error('Implement the perfectlyOrdered function');
}
/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
 export function reorder(deck) {
  return deck.reverse();
  throw new Error('Implement the reorder function');
}
