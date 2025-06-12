const cards = document.getElementsByClassName('.memory-card');
let allImages = document.getElementsByClassName('.front-face');
let movesDisplay = document.querySelector('.move-counter');
let toggledCardsArray = [];
let move = 0;
const restart = document.getElementById('restart');

const imagesLinkArray = [
    {
        image: 'astro.webp',
    },
    {
        image: 'baymax.webp',
    },
    {
        image: 'bumblebee.webp',
    },
    {
        image: 'r2d2.webp',
    },
    {
        image: 'wall-e.webp',
    },
    {
        image: 'wild-robot.webp',
    },
    {
        image: 'astro.webp',
    },
    {
        image: 'baymax.webp',
    },
    {
        image: 'bumblebee.webp',
    },
    {
        image: 'r2d2.webp',
    },
    {
        image: 'wall-e.webp',
    },
    {
        image: 'wild-robot.webp',
    }
]

const shuffleCards = () => {
    for (let i = 0; i < cards.length; i++) {
        let shuffle = Math.floor(Math.random() * 12);
        let temp = cards[i];
        cards[i] = cards[shuffle];
        cards[shuffle] = temp;
    }
};

// function to restart the game
const restartGame = () => {
    let toggledCard = document.getElementsByClassName('card toggled');
    imagesLinkArray.sort(() => Math.random() * 12);
    Object.values(toggledCard).forEach(function (el) {
        setTimeout(() => {
            el.classList.remove("toggled");
        }, 0);
    })
    toggledCardsArray.length = 0;
    move = 0;
    movesDisplay.innerText = `Moves: ${move}`;
    let allImagesSrc = document.getElementsByClassName('.front-face');
    Object.values(allImagesSrc).forEach((el, index)=>{
        el.src = imagesLinkArray[index].image;
    }) 
}
restart.addEventListener('click', restartGame);

//checking for the last clicked and current 
//clicked cards and applying changes accordingly
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        this.classList.add("toggled");
        toggledCardsArray.push(this);
        let thisImgSrc = this.querySelector('.front-face').src;
        let previousImgSrc = 
        toggledCardsArray[toggledCardsArray.length - 2].querySelector('.front-face').src;
        if(thisImgSrc !== previousImgSrc) {
            toggledCardsArray.forEach(function (el) {
                setTimeout(() => {
                    el.classList.remove("toggled");
                }, 500);
            })
            toggledCardsArray.length = 0;
            move++;
        }
        else{
            toggledCardsArray.length = 0;
            move++;
        }
        movesDisplay.innerText = `Moves: ${move}`;
    })
}