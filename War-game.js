
class Card {
    constructor(suits, values, rank) {
        this.suits = suits;
        this.values = values;
        this.rank = rank;
    }

    describe() {
        return `Suit: ${this.suits}, Values: ${this.values}, Rank: ${this.rank}`
    }

}

var suits = ["Club", "Heart", "Diamond", "Spade"];
var values = ['2', '3', '4', '5', '6', '7', '8', '9','10', 'J', 'Q', 'K', 'A'];

var cardValue = {
    "2" :2,
    "3": 3, 
    "4": 4, 
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8, 
    "9": 9, 
    "10": 10, 
    "J": 11,
    "Q": 12,
    "K": 13,
    "A": 14,
}


class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck() {
        for ( let suitCounter = 0; suitCounter < 4; suitCounter++) {
            for ( let valueCounter = 0; valueCounter <13; valueCounter++) {
                this.cards.push(values[valueCounter] + suits[suitCounter]);
            }
           
        }
        
    
    }

    shuffleDeck() {
        for (let i = this.cards.length; i > 0; i--) {
            let randomIndex = Math.floor(Math.random() * 13 + 1);
            let temp = this.cards[i];
            this.cards[i] = this.cards[randomIndex];
            this.cards[randomIndex] = temp;
        }
        
    }

    gameDeck() {
        for (let i = 0; i < 52; i+=2) {
            let giveCards1 = this.cards.pop();
            playerOne.playerDeck.push(giveCards1);
            let giveCards2 = this.cards.pop();
            playerTwo.playerDeck.push(giveCards2);
        }
    }
}

const deck = new Deck();
deck.createDeck();
deck.shuffleDeck();

class Player {
    constructor(name) {
        this.playerName = name;
        this.playerScore = 0;
        this.playerDeck = [];
    }
}
var playerOne = new Player("Erick");
var playerTwo = new Player("Sahir");

class Game {
    constructor() {
        this.players = [];
    }

    nextRound() {
        for(let round = 0; round < 26; round++){
              let playerOneDeck = playerOne.playerDeck.pop(); 
              let playerTwoDeck = playerTwo.playerDeck.pop();
              console.log(`Round ${round +1}: ${playerOne.playerName} has a ${playerOneDeck} and ${playerTwo.playerName} has a ${playerTwoDeck}`);

              if(playerOneDeck > playerTwoDeck){
                  console.log(`${playerOne.playerName} wins! `);
                  playerOne.playerScore++;
                }   else if(playerOneDeck < playerTwoDeck){
                    console.log(`${playerTwo.playerName} wins! `);
                    playerTwo.playerScore++;
                }   else if(playerOneDeck === playerTwoDeck){
                          console.log(`Players Tied. `);
                }
        } 
      }


    showScore() {
        let finalScore1 = playerOne.playerScore;
        let finalScore2 = playerTwo.playerScore;
        console.log(`Score: ${playerOne.playerName} has ${finalScore1}, and ${playerTwo.playerName} has ${finalScore2}`);

        if (finalScore1 > finalScore2) {
            console.log(`${playerOne.playerName} wins!`); 
        } else if (finalScore1 < finalScore2) {
            console.log(`${playerTwo.playerName} wins!`); 
        } else {
            console.log("Oh No! It's a tie game!");
        }
    }

    playGame() {
        this.players.push(playerOne);
        this.players.push(playerTwo);
        
        deck.createDeck();
        deck.shuffleDeck();

        deck.gameDeck();

        this.nextRound();
        this.showScore();
    }
    

}


let startGame = new Game();
startGame.playGame();
