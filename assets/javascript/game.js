// document.addEventListener ('keydown') {

//array of possibel words
var word = ["red", "blue", "black", "yellow"];
var randomWord
var reveal;
var guess;
// var alphabet = "abcdefghijjklmnopqrstuvwxyz".split("");
// var correctLetters = [];
var lettersGuessed = [];
var wins = 0;
var revealArray = [];

//choose a random word
function randomWord() {
randomWord = word[Math.floor(Math.random() * word.length)];
}


//blank spaces-letter reveal
function startGame () {
for (var i=0; i <randomWord.length; i++) {
      revealArray[i] = "_";
}
document.getElementById("reveal-div").innerHTML = revealArray.join (" ");
}

// shows how many letters are left in the word
var remainingLetters = randomWord.length + 6;
document.getElementById("guesses-remaining-div").innerHTML = remainingLetters;

function guesses() {
      document.onkeyup = function(event) {
            guess = event.key.toLowerCase();
            for (i = 0; i < randomWord.length; i++) {
                  
                  if (guess === randomWord[i]) {
                        revealArray[i] = guess;
                        document.getElementById("reveal-div").innerHTML = revealArray.join(" ");
                  }
                  else {
                        document.getElementById("guesses-remaining-div").innerHTML = remainingLetters;
                        document.getElementById("letters-guessed-div").innerHTML = guess;
                  }

            }
      }
}



document.onkeyup = function(event){
randomWord();
startGame();
guesses();
}