//array of possibel words
var word
//number of wins
var wins = getElementById("wins-div")
//blank spaces-letter reveal
var reveal
//number of guesses allowed
var numberOfGuesses = 15;
//number of guesses remaining
var guessesRemaining
//letters already guessed
var lettersGuessed

wins.document.write(text("hello"))

//player presses any key to begin

//computer chooses a word from var word array

//computer counts how many letters are in that word and displays a "_" for each letter in the reveal

//on keyup if its a letter, computer assesses if it is in the word

      //if the letter is in the word, computer replaces the corresponding "_" in the reveal with the correct letter  AND decreases the number of guesses remaining by 1

      //if it is not a letter, nothing happens?
      //if the letter is not in the word, the computer adds the letter to the letters already guessed and decreases the number of guesses remaining by 1

//