var BasicCard = require("./BasicCard");

// Hold flashcard front - question
// var flashCardFront = process.argv[2];
    //console.log("Front of flashcard:  " + flashCardFront);

// Hold flashcard back - answer
// var flashCardBack = process.argv[3];
    //console.log("Back of flashcard: " + flashCardBack);

// Create a new flash card using the FlashCard object constructor
//var myFlashCard = new BasicCard(flashCardFront, flashCardBack);

// console.log("myFlashCard front :" + myFlashCard.front);
// console.log("myFlashCard back :" + myFlashCard.back);

var firstPresident = new BasicCard(
    "Who was the first president of the United States?", "George Washington");

console.log("FlashCard front :" + firstPresident.front);
console.log("FlashCard back :" + firstPresident.back);




