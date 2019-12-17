// document.addEventListener ('keydown') {

//array of possibel words
var word = ["red", "blue", "black", "yellow"];
var reveal;
var guess;
var alphabet = "abcdefghijjklmnopqrstuvwxyz".split("");
var correctLetters = [];
var lettersGuessed = [];
var wins = 0;
var revealArray = [];

//choose a random word
var word = word[Math.floor(Math.random() * word.length)];
console.log(word);

//blank spaces-letter reveal
function randomWord () {
for (var i=0; i < word.length; i++) {
      revealArray[i] = "_";
}
document.getElementById("reveal-div").innerHTML = revealArray.join (" ");
}
console.log(revealArray);

// shows how many letters are left in the word
var remainingLetters = word.length + 5;
document.getElementById("guesses-remaining-div").innerHTML = remainingLetters;
console.log(remainingLetters);

function guesses() {
      document.onkeyup = function(event) {
            guess = event.key.toLowerCase();
            for (i = 0; i < word.length; i++) {
                  if (guess === word[i]) {
                        correctLetters[i] = guess;
                        document.getElementById("reveal-div").innerHTML = correctLetters.join(" ");
                        revealArray[i]="_";
                        // return document.getElementById ("endgame-div").innerHTML = "You Win!";
                  }
            }
      }
}



document.onkeyup = function(event){
randomWord();
guesses();
}