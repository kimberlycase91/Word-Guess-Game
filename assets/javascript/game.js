// document.addEventListener ('keydown') {

//array of possibel words
var word = ["red", "blue", "black", "yellow"];
var randomWord;
var reveal;
var guess;
var alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
var remainingLetters = 0;
var lettersGuessed = [];
var incorrectGuess = [];
var wins = 0;
var losses = 0;
var revealArray = [];
var wordLength;
var randomWord = word[Math.floor(Math.random() * word.length)];

//choose a random word
function randomWordGen() {
      randomWord = word[Math.floor(Math.random() * word.length)];
}


//blank spaces-letter reveal
function startGame() {
      randomWordGen();
      wordLength = randomWord.length;
      lettersGuessed = [];
      revealArray = [];
      remainingLetters = 0;
      for (var i = 0; i < randomWord.length; i++) {
            revealArray[i] = "_";
      }
      document.getElementById("reveal-div").innerHTML = revealArray.join(" ");
      remainingLetters = randomWord.length + 6;
      document.getElementById("guesses-remaining-div").innerHTML = remainingLetters;
      document.getElementById("wins-div").innerHTML = wins;
      document.getElementById("losses-div").innerHTML = losses;
}

// shows how many letters are left in the word

function guessCounter() {
      remainingLetters--;
      if (remainingLetters < 0) {
            remainingLetters = 0;
      }
      document.getElementById("guesses-remaining-div").innerHTML = remainingLetters;
}

function guesses() {
      document.onkeyup = function (event) {
            guess = event.key.toLowerCase();
            for (i = 0; i < randomWord.length; i++) {

                  if (guess === randomWord[i]) {
                        revealArray[i] = guess;
                        wordLength--;
                        document.getElementById("reveal-div").innerHTML = revealArray.join(" ");
                  }
            }

            if (wordLength === 0) {
                  wins++;
                  document.getElementById("wins-div").innerHTML = wins;
                  document.getElementById("reveal-div").textContent = randomWord;
                  remainingLetters = [];
                  lettersGuessed = [];
                  document.onkeyup = function (event) {
                        gamePlay();
                  }
            }

            if (guess !== randomWord[i]) {
                  for (i = 0; i < alphabet.length; i++) {
                        if (guess === alphabet[i]) {
                              incorrectGuess = guess;
                              lettersGuessed.push(incorrectGuess);
                              document.getElementById("letters-guessed-div").innerHTML = lettersGuessed.join(" ");
                              guessCounter();
                        }

                  }
                  for (i = 0; i < alphabet.length; i++) {
                  if (guess !== alphabet[i]) {
                        return null;
                  }
            }}



            if (remainingLetters === 0) {
                  losses++;
                  document.getElementById("wins-div").innerHTML = losses;
                  document.getElementById("reveal-div").textContent = randomWord;
                  remainingLetters = [];
                  lettersGuessed = [];
                  document.onkeyup = function (event) {
                        gamePlay();
                  }
            }
      }
}


function gamePlay() {
      startGame();
      guesses();
}

document.onkeyup = function (event) {
      startGame();
      guesses();
}