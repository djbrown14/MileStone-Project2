const cards = 
    document.getElementsByClassName('card');
let allImages = document.getElementsByClassName('front-face');
let movesDisplay = document.querySelector('.moves');
let toggledCardsArray = [];
let move = 0;
const restart = document.getElementById('restart');

const imagesLinkArray = [
    {
        id: 1,
        image: 
'astro.webp',
        newAlt: 'Astro Image'
    },
    {
        id: 2,
        image: 
'baymax.webp',
        newAlt: 'Baymax Image'
    },
    {
        id: 3,
        image: 
'wild-robot.webp',
        newAlt: 'Wild-robot Image'
    },
    {
        id: 4,
        image: 
'bumblebee.webp',
        newAlt: 'Bumblebee Image'
    },
    {
        id: 5,
        image: 
'r2d2.webp',
        newAlt: 'R2d2 Image'
    },
    {
        id: 6,
        image: 
'wall-e.webp',
        newAlt: 'Wall-e Image'
    },
    {
        id: 7,
        image: 
'astro.webp',
        newAlt: 'Astro Image'
    },
    {
        id: 8,
        image: 
'baymax.webp',
        newAlt: 'Baymax Image'
    },
    {
        id: 9,
        image: 
'wild-robot.webp',
        newAlt: 'Wild-robot Image'
    },
    {
        id: 10,
        image: 
'bumblebee.webp',
        newAlt: 'Bumblebee Image'
    },
    {
        id: 11,
        image: 
'r2d2.webp',
        newAlt: 'R2d2 Image'
    },
    {
        id: 12,
        image: 
'wall-e.webp',
        newAlt: 'Wall-e Image'
    }
]

// function to reset the game
function restart () {
  resetBoard();
  shuffleCards();
  moves = 0
  document.querySelector('.moves').textContent = moves;
  cards.innerHTML = "";
  generateCards();
}
    toggledCardsArray.length = 0;
    move = 0;
    movesDisplay.innerText = `Moves: ${move}`;
    let allImagesSrc = document.getElementsByClassName('front-face');
    Object.values(allImagesSrc).forEach((el, index)=>{
        el.src = imagesLinkArray[index].image;
        el.alt = imagesLinkArray[index].newAlt;
        el.id = imagesLinkArray[index].id
    }) 

reset.addEventListener('click', resetGame);

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
    movesDisplay.innerText = `Moves: ${move}`;
      setTimeout(()=>{
        message(`Congratulations!!! You won the game in ${move}.`)
      }, 300)
  })
}
