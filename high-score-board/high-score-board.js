/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Creates a new score board with an initial entry.
 *
 * @returns {Record<string, number>} new score board
 */
export function createScoreBoard() {
  // throw new Error('Please implement the createScoreBoard function');
  const scoreBoard = {
    'The Best Ever': 1000000
  };

  return scoreBoard;
}

/**
 * Adds a player to a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} score
 * @returns {Record<string, number>} updated score board
 */
export function addPlayer(scoreBoard, player, score) {
  // throw new Error('Please implement the addPlayer function');
  scoreBoard[player] = score;

  return scoreBoard;
}

/**
 * Removes a player from a score board.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @returns {Record<string, number>} updated score board
 */
export function removePlayer(scoreBoard, player) {
  // throw new Error('Please implement the removePlayer function');
  // eslint-disable-next-line no-prototype-builtins
  console.log("check for player in scoreBoard");
  if(scoreBoard.hasOwnProperty(player)){
    console.log(scoreBoard.player);
    for(let key in scoreBoard) {
      console.log(key);
      if(key === player) {
        delete scoreBoard[player];
        console.log(scoreBoard);
      }
    }
    return scoreBoard;
  }else{
    return scoreBoard;
  }
}

/**
 * Increases a player's score by the given amount.
 *
 * @param {Record<string, number>} scoreBoard
 * @param {string} player
 * @param {number} points
 * @returns {Record<string, number>} updated score board
 */
export function updateScore(scoreBoard, player, points) {
  // throw new Error('Please implement the addToScore function');
  // eslint-disable-next-line no-prototype-builtins
  if(scoreBoard.hasOwnProperty(player)){
   for(let key in scoreBoard){
     console.log(key);
     if(key === player){
       scoreBoard[player] += points;
       return scoreBoard;
     }
   }
  }else{
    return scoreBoard;
  }
}

/**
 * Applies 100 bonus points to all players on the board.
 *
 * @param {Record<string, number>} scoreBoard
 * @returns {Record<string, number>} updated score board
 */
export function applyMondayBonus(scoreBoard) {
  // throw new Error('Please implement the applyMondayBonus function');
  for(let player in scoreBoard){
   scoreBoard[player] += 100;
  }

  return scoreBoard;
}

/**
 * Normalizes a score with the provided normalization function.
 *
 * @param {Params} params the parameters for performing the normalization
 * @returns {number} normalized score
 */
export function normalizeScore(params) {
  // throw new Error('Please implement the normalizeScore function');
  let normalizedScore = params.normalizeFunction(params.score);

  return normalizedScore;
}
