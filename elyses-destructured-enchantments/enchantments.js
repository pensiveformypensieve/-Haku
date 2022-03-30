/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Get the first card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the first card in the deck
 */
 export function getFirstCard(deck) {
  const [firstCard, secondCard] = deck;
  return firstCard;
  throw new Error('Implement the getFirstCard function');
}

/**
 * Get the second card in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card} the second card in the deck
 */
 export function getSecondCard(deck) {
  const [firstCard, secondCard] = deck;
  return secondCard;
  throw new Error('Implement the getSecondCard function');
}

/**
 * Switch the position of the first two cards in the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck with reordered cards
 */
 export function swapTopTwoCards(deck) {
  const [a,b, ...rest] = deck;
   return [b,a, ...rest];
   throw new Error('Implement the swapTopTwoCards function');
 }

/**
 * Put the top card of the given deck into a separate discard pile
 *
 * @param {Card[]} deck
 *
 * @returns {[Card, Card[]]} the top card of the given
 * deck and a new deck containing all the other cards
 */
 export function discardTopCard(deck) {
  const [firstCard, ...rest] = deck;
   return [firstCard, rest];
   //deck = firstCard, new deck = rest (...rest already assigned the rest of the cards into rest variable)
   throw new Error('Implement the discardTopCard function');
 }

/** @type Card[] **/
const FACE_CARDS = ['jack', 'queen', 'king'];

/**
 * Insert face cards into the given deck
 *
 * @param {Card[]} deck
 *
 * @returns {Card[]} new deck where the second,
 * third, and fourth cards are the face cards
 */
 export function insertFaceCards(deck) {
  const[firstCard, ...rest] = deck;
  return[firstCard, 'jack', 'queen', 'king', ...rest];
  throw new Error('Implement the insertFaceCards function');
}
