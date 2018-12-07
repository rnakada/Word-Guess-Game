//Global Variable
// ---------------------------------------------------------------------------------------------------

var words = ["carol", "presents", "santa", "oranments", "elfs", "snowman"];
console.log (words);
var randomChoice = words[Math.floor(Math.random()*words.length)];
console.log (randomChoice);
var wins = 0;
console.log (wins);
var losses = 0;
console.log (losses);
var alphabets = [];

//#ID
// ---------------------------------------------------------------------------------------------------

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
// ---------------------------------------------------------------------------------------------------

function game() {

// prevents score to erase, when page refreshes. When page is exited out, score restarts
    wins = sessionStorage.getItem("winwin");
    document.getElementById("wins").innerHTML = wins;
    losses = sessionStorage.getItem("lossloss");
    document.getElementById("losses").innerHTML = losses;

// this is affiliated with randomChoice
    correctGuesses = [];
// this is affiliated with guessLettes
    wrongGuesses = [];
// this is affiliated with attemptsRemaining
    allowedGuesses = 15;
// correctGuesses pushes _ to the word length of randomChoice
    for (var i = 0; i < randomChoice.length; i++) {
        correctGuesses.push("_");
    }

console.log("correctGuesses: " + correctGuesses);
console.log(wrongGuesses);

//innerHTML
randomChoiceElement.innerHTML = correctGuesses.join(" ");
attemptsRemainingElement.innerHTML = allowedGuesses;
}

// ---------------------------------------------------------------------------------------------------

function updateGuesses(letter) {
    console.log("update");
    if (randomChoice.indexOf(letter) === -1) {
    wrongGuesses.push(letter); 

// innerHTML    
guessedLettersElement.innerHTML = wrongGuesses.join(", ");
attemptsRemainingElement.innerHTML = allowedGuesses--;
    } 

    else {
        for (var i = 0; i < randomChoice.length; i++) {
        if (randomChoice[i] === letter) {
            correctGuesses[i] = letter;
        }
    }

// innerHTML
randomChoiceElement.innerHTML = correctGuesses.join(" ");
    }
}

// ---------------------------------------------------------------------------------------------------

function checkWin() {
    if (correctGuesses.indexOf("_") === -1) {
        alert("You Win"); wins++; sessionStorage.setItem("winwin",wins); window.location.reload();
    } else if (allowedGuesses === -1) {
        alert("You Lose!"); losses++; sessionStorage.setItem("lossloss",losses); window.location.reload();
    }
}

winsElement.innerHTML = wins;
lossesElement.innerHTML = losses;

// ---------------------------------------------------------------------------------------------------
 
// ---------------------------------------------------------------------------------------------------
document.onkeyup = function (event) {

    var noPast = true;

    guessedLetters = String.fromCharCode(event.keyCode).toLowerCase();
    
    for(var i = 0; i < alphabets.length; i++){
        if (guessedLetters == alphabets[i]){
            noPast = false;
            break;
        }
    }
    if (noPast){
        alphabets.push(guessedLetters);
        updateGuesses(guessedLetters);
        checkWin();
            
    console.log(guessedLetters);
    
    }
}

game();