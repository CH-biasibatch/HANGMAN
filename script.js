var word = "";
var words = ["grapefruit","bagpipes","dwarves","elephant","galaxy","voodoo","wristwatch","yoked"];
var guesses = 8;
var  guessedLetters = [];


function startGame() {
    word = words[Math.floor(Math.random()* words.length)];
    document.getElementById("board").innerHTML = printWord();
}

function guessLetter(letter) {
    letter = letter.toLowerCase();
    guessedLetters += letter;
    document.getElementById("board").innerHTML = printWord();

}


function printWord(){
    var retWord = "";
    for(var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) == -1) {
            retWord += "_ ";
        } else {
            retWord += word[i]
        }
    }
    return retWord;
}