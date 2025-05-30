 const game = document.getElementById('.memorygame');
 const totalPairs = 6;
 const images = [];

    for (let i = 1; i <= totalPairs; i++) {
        images.push(`img/img-${i}.webp`);
    }

  let cards = [...images, ...images];
  let firstCard = null;
  let secondCard = null;
  let lockBoard = false;
  
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
  }

  function createCards(imgScr) {
    const card = document.createElement('div');
    card.classList.add('card');
   
    const inner = document.createElement('div');
    inner.classList.add('card-inner');

    const frontFace = document.createElement('img');
    frontFace.classList.add('front-face');

    const backFace = document.createElement('img');
    backFace.classList.add('back-face');
    backFace.style.backgroundImage = "url('img/background1.webp')";

    inner.appendChild(frontFace);
    inner.appendChild(backFace);
    card.appendChild(inner);

    card.dataset.framework = imgScr;
    card.addEventListener('click', flipCard);

    return card;
  }

  function initGame() {
    BodyReadable.innerHTML = '';
    shuffle(cards);

    cards.forEach(img => {
        const cardElement = createCards(img);
        board.appendChild(cardElement);
  });
}

  function flipCard() {
    if (lockBoard || this.classList.contains('matched') || this === firstCard return;

    this.classList.add('flip');

    if (!firstCard) {
      firstCard = this;
      return;
    }

    secondCard = this;
    lockBoard = true;

    checkForMatch();
  }

  function checkForMatch() {
    const isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

    if (isMatch) {
        firstCard.classList.add('matched');
        secondCard.classList.add('matched');
        resetBoard();
    } else {
        setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetBoard();
    }, 1000);
    }
}

  function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
  }
