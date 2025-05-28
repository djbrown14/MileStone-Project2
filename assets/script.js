const cards = document.querySelectorAll('.memory-card');

function flipCard() {
  this.classList.toggle('flip');

  const flippedCards = document.querySelectorAll('.memory-card.flip');
  if (flippedCards.length === 2) {
    checkForMatch(flippedCards);
  }
}
function checkForMatch(flippedCards) {
  const [card1, card2] = flippedCards;

  if (card1.dataset.framework === card2.dataset.framework) {
    disableCards(card1, card2);
  } else {
    unflipCards(card1, card2);
  }
}
function disableCards(card1, card2) {
  card1.removeEventListener('click', flipCard);
  card2.removeEventListener('click', flipCard);
  card1.classList.add('matched');
  card2.classList.add('matched');
}

