//console.log("up and running");
//queen card
//const cardOne = "queen";
//const cardTwo = "queen";

//Kings card
//const cardThree = "king";
//const cardFOur = "king";

//console.log(`User flipped : ${cardTwo}`);
//console.log(`User flipped : ${cardOne}`);

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = []

/*const cardOne = cards[0];
cardsInPlay.push(cardOne);

console.log(`User flipped: ${cardOne}`);
const cardTwo = cards[2];

cardsInPlay.push(cardTwo);
console.log(`User flipped: ${cardTwo}`);*/

let checkForMatch = () => {
    if (cardsInPlay[0] === cardsInPlay[1]) {
        console.log("You found a match!");
      } else {
        console.log("Sorry, try again.");
      }
}

let flipCard = (cardId) => {
    console.log(`User flipped: ${cards[cardId]}`);
    cardsInPlay.push(cards[cardId]);

    if (cardsInPlay.length === 2) {
        checkForMatch();
    }
}

flipCard(0);
flipCard(2);