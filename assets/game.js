const cards = document.getElementsByClassName('card');
let allImages = document.getElementsByClassName('front-face');
let movesDisplay = document.querySelector('.moves');
let toggledCardsArray = [];
let move = 0;
let winCount = 0;
const restart = document.getElementById('restart');

const imagesLinkArray = [
    {
        image: 'astro.webp',
        newAlt: 'Astro Image'
    },
    {
        image: 'baymax.webp',
        newAlt: 'Baymax Image'
    },
    {
        image: 'wild-robot.webp',
        newAlt: 'Wild-robot Image'
    },
    {
        image: 'bumblebee.webp',
        newAlt: 'Bumblebee Image'
    },
    {
        image: 'r2d2.webp',
        newAlt: 'R2d2 Image'
    },
    {
        image: 'wall-e.webp',
        newAlt: 'Wall-e Image'
    },
    {
        image: 'astro.webp',
        newAlt: 'Astro Image'
    },
    {
        image: 'baymax.webp',
        newAlt: 'Baymax Image'
    },
    {
        image: 'wild-robot.webp',
        newAlt: 'Wild-robot Image'
    },
    {
        image: 'bumblebee.webp',
        newAlt: 'Bumblebee Image'
    },
    {
        image: 'r2d2.webp',
        newAlt: 'R2d2 Image'
    },
    {
        image: 'wall-e.webp',
        newAlt: 'Wall-e Image'
    }
]

// function to shuffle the images
function shuffle(array) {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }
}

// function to restart the game
const restartGame = () => {
    let toggledCard = document.getElementsByClassName('card toggled');
    toggledCard.forEach(toggled => {
        toggled.remove();
    })
    toggledCardsArray.length = 0;
    move = 0;
    winCount = 0;
    movesDisplay.innerText = `Moves: ${move}`;
    let allImagesSrc = document.getElementsByClassName('front-face');
    Object.values(allImagesSrc).forEach((el, index) => {
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].newAlt;
    })
}

restart.addEventListener('click', restartGame);

//checking for the last clicked and current 
//clicked cards and applying changes accordingly
for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function () {
        this.classList.add("toggled");
        toggledCardsArray.push(this);
        const thisImgSrc = this.querySelector('.front-face').src;
        const previousImgSrc = toggledCardsArray[toggledCardsArray.length - 2].querySelector('.front-face').src;
        if (thisImgSrc !== previousImgSrc) {
            toggledCardsArray.forEach(function (el) {
                setTimeout(() => {
                    el.classList.remove("toggled");
                }, 500);
            })
            toggledCardsArray.length = 0;
            move++;
        }
        else {
            toggledCardsArray.length = 0;
            move++;
            winCount++;
        }
        movesDisplay.innerText = `Moves: ${move}`;
        if (winCount === 6) {
            setTimeout(() => {
                alert(`Congratulations!!! You won the game in ${move} moves.`)
            }, 300)
        }
    })
}
