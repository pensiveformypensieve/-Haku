// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
 export function removeDuplicates(playlist) {
  var set = new Set(playlist);
  return Array.from(set);
  throw new Error('Please implement the removeDuplicates function');
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
 export function hasTrack(playlist, track) {
  var set = new Set(playlist);
  return set.has(track) ? true : false;
  throw new Error('Please implement the hasTrack function');
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
 export function addTrack(playlist, track) {
  var set = new Set(playlist);
  set.add(track);
  return Array.from(set);
  throw new Error('Please implement the addTrack function');
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  var set = new Set(playlist);
  set.delete(track);
  return Array.from(set);
  throw new Error('Please implement the deleteTrack function');
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
var artists = new Array();
var listOfArtists = new Array();
if(playlist.length > 0 && playlist !== undefined){
var set = new Set(playlist);
for(let track of set){
  if(track !== undefined && track.length > 0){
  artists = track.split(' - ');
  const[song, artist] = artists;
  console.log(artist);
  listOfArtists.push(artist);
    console.log('list:', listOfArtists);
}
  var set2 = new Set(listOfArtists);
}
return Array.from(set2);
  
}else{
  return playlist;
}
// throw new Error('Please implement the listArtists function');
}
