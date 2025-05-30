const cards = document.querySelectorAll('.card');

let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;

function flipCard(e) {
    // getting the clicked card
    let clickedCard = e.target;
    if (clickedCard === cardOne && !disableDeck) {
        clickedCard.classList.toggle('flip');
        if (!cardOne) {
            // return the cardOne value to clickedCard
            return (cardOne = clickedCard);
        }
    }

    cardTwo = clickedCard;
    disableDeck = true;

    let cardOneImg = cardOne.querySelector('img').src;
        cardTwoImg = cardTwo.querySelector('img').src;
    matchCards(cardOneImg, cardTwoImg);
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        // increment matched value by 1
        matchCard++
        if (matchedCard == 6) {
            // shuffle function 1 sec
            setTimeout(() => {
              shuffleCard();  
            }, 1000);
        }
        cardOne.removeEventListener('click', 'flipCard');
        cardTwo.removeEventListener('click', 'flipCard');

        cardOne = cardTwo = '';
        return (disableDeck = false);
    }
}

function shuffleCard() {
    matchedCard = 0;
    cardOne = cardTwo = '';
    disableDeck = false;


    let arr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
    arr.sort(() => (Math.random() > 0.5 ? 1 : -1));

    cards.forEach((card, i) => {
        card.classList.remove('flip');
        let imgTag = card.querySelector('.backface img')
        imgTag.src = `img/img-${arr[i]}.webp`;
        // Add Event Listener to all cards
        card.addEventListener('click', flipCard);
    });
}

shuffleCard();

cards.forEach(card => {
    // card.classList.add('flip');
    // Add Event Listener to all cards
    card.addEventListener('click', flipCard);
});