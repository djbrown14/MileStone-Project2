const selectors = {
  memory-game : document.querySelector('.memory-game'),
  card : document.querySelectorAll('.memory-card'),
  moves : document.querySelector('.moves'),
  timer : document.querySelector('.timer'),
  start : document.querySelector('.start'),
  win : document.querySelector('.win')
};

const state = {
  gameStarted : false,
  flippedCards : 0,
  total