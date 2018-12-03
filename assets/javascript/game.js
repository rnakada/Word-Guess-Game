//

var words = ["carol", "presents", "santa"];
console.log (words);
var randomChoice = words[Math.floor(Math.random()*words.length)];
console.log (randomChoice);
var wins = 0;
console.log (wins);
var losses = 0;
console.log (losses);

//#ID

var randomChoiceElement = document.getElementById("randomChoice");
console.log(randomChoiceElement);
var guessedLettersElement = document.getElementById("guessedLetters");
console.log(guessedLettersElement);
var attemptsRemainingElement = document.getElementById("attemptsRemaining");
console.log(attemptsRemainingElement);
var winsElement = document.getElementById("wins");
console.log(winsElement);
var lossesElement = document.getElementById("losses");
console.log(lossesElement);
// function

function game() {

    words = randomChoice;
    correctGuesses = [];
    wrongGuesses = [];
    allowedGuesses = 15;

    for (var i = 0; i < randomChoice.length; i++) {
        correctGuesses.push("_");
    }

console.log("randomChoice: " + words);   
console.log("correctGuesses: " + correctGuesses);
console.log(wrongGuesses);
//innerHTML

randomChoiceElement.innerHTML = correctGuesses.join(" ");
attemptsRemainingElement.innerHTML = allowedGuesses;
}

// ---------------------------------------------------------------------------------------------------

function updateGuesses(letter) {
    // allowedGuesses--;
    attemptsRemainingElement.innerHTML = allowedGuesses;

    if (randomChoice.indexOf(letter) === -1) {
    wrongGuesses.push(letter);
    guessedLettersElement.innerHTML = wrongGuesses.join(", ");
    } else {

        for (var i = 0; i < randomChoice.length; i++) {
        if (randomChoice[i] === letter) {
            correctGuesses[i] = letter;
        }
    }
console.log(letter);
// innerHTML

randomChoiceElement.innerHTML = correctGuesses.join(" ");
    }
}

// ---------------------------------------------------------------------------------------------------

function checkWin() {
    if (correctGuesses.indexOf("_") === -1) {
        alert("You Win"); winsElement.innerHTML = + 1; 
    } else if (allowedGuesses === 0) {
        alert("You Lose!"); lossesElement.innerHTML = + 1;
    }
}

winsElement.innerHTML = wins;
lossesElement.innerHTML = losses;
// ---------------------------------------------------------------------------------------------------
document.onkeyup = function (event) {
    var guessedLetters = String.fromCharCode(event.keyCode).toLowerCase();
    
    updateGuesses(guessedLetters);
    checkWin();
};

game();