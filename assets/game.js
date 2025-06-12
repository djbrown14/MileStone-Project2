const cards = document.getElementsByClassName('memory-card');
let allImages = document.getElementsByClassName('front-face');
let movesDisplay = document.querySelector('.move-counter');
let toggledCardsArray = [];
let move = 0;
const restart = document.getElementById('restart');

const imagesLinkArray = [
    {
        id: 1,
        image: 'astro.webp',
        newAlt: 'Astro'
    },
    {
        id: 2,
        image: 'atom.webp',
        newAlt: 'Atom'
    },
    {
        id: 3,
        image: 'baymax.webp',
        newAlt: 'Baymax'
    },
    {
        id: 4,
        image: 'bumblebee.webp',
        newAlt: 'Bumblebee'
    },
    {
        id: 5,
        image: 'clank.webp',
        newAlt: 'Clank'
    },
    {
        id: 6,
        image: 'gipsy-danger.webp',
        newAlt: 'Gipsy-danger'
    },
    {
        id: 7,
        image: 'r2d2.webp',
        newAlt: 'R2d2'
    },
    {
        id: 8,
        image: 'rodney.webp',
        newAlt: 'Rodney'
    },
    {
        id: 9,
        image: 'wall-e.webp',
        newAlt: 'Wall-e'
    },
    {
        id: 10,
        image: 'wild-robot.webp',
        newAlt: 'Wild-robot'
    },
    {
        id: 11,
        image: 'astro.webp',
        newAlt: 'Astro'
    },
    {
        id: 12,
        image: 'atom.webp',
        newAlt: 'Atom'
    },
    {
        id: 13,
        image: 'baymax.webp',
        newAlt: 'Baymax'
    },
    {
        id: 14,
        image: 'bumblebee.webp',
        newAlt: 'Bumblebee'
    },
    {
        id: 15,
        image: 'clank.webp',
        newAlt: 'Clank'
    },
    {
        id: 16,
        image: 'gipsy-danger.webp',
        newAlt: 'Gipsy-danger'
    },
    {
        id: 17,
        image: 'r2d2.webp',
        newAlt: 'R2d2'
    },
    {
        id: 18,
        image: 'rodney.webp',
        newAlt: 'Rodney'
    },
    {
        id: 19,
        image: 'wall-e.webp',
        newAlt: 'Wall-e'
    },
    {
        id: 20,
        image: 'wild-robot.webp',
        newAlt: 'Wild-robot'
    },
]

// function to restart the game
const restartGame = () => {
    let toggledCard = 
        document.getElementsByClassName('card toggled');
    imagesLinkArray.sort(() => Math.random() - 0.5);
    Object.values(toggledCard).forEach(function (el) {
        setTimeout(() => {
            el.classList.remove("toggled");
        }, 0);
    })
    toggledCardsArray.length = 0;
    move = 0;
    movesDisplay.innerText = `Moves: ${move}`;
    let allImagesSrc = document.getElementsByClassName('front-face');
    Object.values(allImagesSrc).forEach((el, index)=>{
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].newAlt;
        el.id = imagesLinkArray[index].id
    }) 
}
restart.addEventListener('click', restartGame);

//checking for the last clicked and current 
//clicked cards and applying changes accordingly
for (var i = 0; i < cards.length; i++) {
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