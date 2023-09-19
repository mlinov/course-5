/******/ (function() { // webpackBootstrap
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
var playList = [{
  author: "LED ZEPPELIN",
  song: "STAIRWAY TO HEAVEN"
}, {
  author: "QUEEN",
  song: "BOHEMIAN RHAPSODY"
}, {
  author: "LYNYRD SKYNYRD",
  song: "FREE BIRD"
}, {
  author: "DEEP PURPLE",
  song: "SMOKE ON THE WATER"
}, {
  author: "JIMI HENDRIX",
  song: "ALL ALONG THE WATCHTOWER"
}, {
  author: "AC/DC",
  song: "BACK IN BLACK"
}, {
  author: "QUEEN",
  song: "WE WILL ROCK YOU"
}, {
  author: "METALLICA",
  song: "ENTER SANDMAN"
}, {
  author: "RAMMSTEIN",
  song: "BESTRAFE MICH"
}, {
  author: "SYSTEM OF A DOWN",
  song: "CHOP SUEY"
}];
var numList = document.querySelector('ol');
numList.classList.add('musicList');
document.body.append(numList);
for (var i = 0; i < playList.length; i++) {
  var listItem = document.createElement('li');
  var author = document.createElement('strong');
  var authorName = document.createElement('span');
  var song = document.createElement('strong');
  var songName = document.createElement('span');
  listItem.setAttribute('title', playList[i].song);
  listItem.classList.add('musicList__item');
  author.textContent = 'Author: ';
  authorName.textContent = playList[i].author;
  song.textContent = 'Song: ';
  songName.textContent = playList[i].song;
  listItem.append(author, authorName, ', ', song, songName);
  numList.append(listItem);
}
/******/ })()
;
//# sourceMappingURL=script.js.map