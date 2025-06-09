let moves = 0;
let cardList = [
    "astro",
    "baymax",
    "bumblebee",
    "r2d2",
    "wall-e",
    "wild-robot",
]

let cardSet;
let board = [];
let rows = 4;
let columns = 3;

window.onload = function() {
    shuffleCards();
    startGame();
}

function shuffleCards() {
    cardSet = cardList.concat(cardList); //two of each card
    console.log(cardSet);
    //shuffle
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length); // get random cards
        //swap
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

function startGame() {
    //arrange the board 4x3
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg); //JS

            // <img id="0-0" class="card" src="astro.webp">
            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = cardImg + ".webp";
            card.classList.add("card");
            document.getElementById("board").append(card);

        }
        board.push(row);
    }

    console.log(board);

}

function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "background1.webp";
        }
    }
}