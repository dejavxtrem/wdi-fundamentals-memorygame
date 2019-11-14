//console.log("up and running");
//queen card
//const cardOne = "queen";
//const cardTwo = "queen";

//Kings card
//const cardThree = "king";
//const cardFOur = "king";

//console.log(`User flipped : ${cardTwo}`);
//console.log(`User flipped : ${cardOne}`);

const cards = [
    {
     rank: "queen",
     suit: "hearts",
     cardImage: "images/queen-of-hearts.png"  
    },
    {
     rank: "queen",
     suit: "diamonds",
     cardImage:"images/queen-of-diamonds.png"
    },
    {  
     rank: "king",
     suit: "hearts",
     cardImage: "images/king-of-hearts.png"
    },
    {
     rank: "king",
     suit: "diamonds",
     cardImage: "images/king-of-diamonds.png"
    }
];


const cardsInPlay = []

/*const cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log(`User flipped: ${cardOne}`);
const cardTwo = cards[2];

cardsInPlay.push(cardTwo);
console.log(`User flipped: ${cardTwo}`);*/

let checkForMatch = () => {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        alert("You found a match!");
      } else {
        alert("Sorry, try again.");
      }
}

let flipCard = (cardId) => {
    console.log(`User flipped: ${cards[cardId].rank}`);
    console.log(`user card image is: ${cards[cardId].cardImage}`);
    console.log(`user card suit is : ${cards[cardId].suit}`);
    cardsInPlay.push(cards[cardId].rank);

    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}

flipCard(0);
flipCard(2);