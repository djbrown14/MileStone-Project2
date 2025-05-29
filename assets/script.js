const memorygame = document.querySelectorAll(".card");
let cards = [];
let firstCard, secondCard;
let lockBoard = false;
let score = 0;
let moves = 0;

document.querySelector(".score").textContent = Score;
document.querySelector(".moves").textContent = Moves; 

function shuffleCards() {
    let currentIndex = cards.length, 
    randomIndex,
    temporaryValue;
while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = cards[currentIndex];
    cards[currentIndex] = cards[randomIndex];
    cards[randomIndex] = temporaryValue;
  }
}

function generateCards() {
    for (let card of cards) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.dataset.name = card.name;
        cardElement.innerHTML = `
        <div class="memory-card">
          <img class="frontface" src=${card.img} alt=${card.name} />
        </div>
        <div class="backface"></div>
        `;
        memorygame.appendChild(cardElement);
        cardElement.addEventListener('click', flipCard);
    }
}

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add("flipped");
    moves++;
    document.querySelector(".moves").textContent = moves;

    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    score++;
    document.querySelector(".score").textContent = score;
    lockBoard = true;

    checkForMatch();
}

function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;

    isMatch ? disableCards() : unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    setTimeout(() => {
        firstCard.classList.remove("flipped");
        secondCard.classList.remove("flipped");

        resetBoard();
    }, 1000);
}

function resetBoard() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}

function restart() {
    resetBoard();
    shuffleCards();
    score = 0;
    moves = 0;
    document.querySelector(".score").textContent = score;
    document.querySelector(".moves").textContent = moves;
    memorygame.innerHTML = "";
    generateCards();
}

