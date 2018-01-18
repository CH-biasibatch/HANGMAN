var word = "";
var words = ["grapefruit","bagpipes","dwarves","elephant","galaxy","voodoo","wristwatch","yoked","abruptly","daiquiri","unzip","quixotic","phlegm","pajama","yachtsman","strengths"];
var guesses = 8;
var guessedLetters = [];



function startGame() {
    word = words[Math.floor(Math.random()* words.length)];
    guesses = 8;
    guessedLetters = [];
    document.getElementById("messageLOSS").innerHTML = "";
    document.getElementById("messageWIN").innerHTML = "";
    printWord();
    document.getElementById("guesses").innerHTML = "Extra guesses: " + guesses + "<br> Guessed Letters: " + guessedLetters;

    var buttons = document.getElementsByTagName('button');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
}

function guessLetter(letter) {
    if(guesses==0) {
        document.getElementById("messageLOSS").innerHTML = "YOU LOSE TRY AGAIN";
        return;
    }else{
        if(word.indexOf(letter) == -1) {
            guesses--;
        }
    }
    document.getElementById(letter).disabled = true;
    guessedLetters.push(letter);
    printWord();
    document.getElementById("guesses").innerHTML = "Extra guesses: " + guesses + "<br> Guessed Letters: " + guessedLetters;
}

function printWord() {
    var retWord = "";
    for (var i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i]) == -1) {
            retWord += "_ ";
        } else {
            retWord += word[i]
        }
    }

    document.getElementById("board").innerHTML = retWord;
    document.getElementById("imageHangman").innerHTML = "<img src='images/" + getImage() + "'>";
    if (retWord.indexOf("_") == -1){
        document.getElementById("messageWIN").innerHTML = "YOU WIN";
    }
    return retWord;
}


function getImage(){
    var imageIndex=["Hangman-0.png","Hangman-1.png","Hangman-2.png","Hangman-3.png","Hangman-4.png","Hangman-5.png","Hangman-6.png","Hangman-7.png","Hangman-8.png"];
    if(guesses==8){
        return imageIndex[0];
    }
    if(guesses==7){
        return imageIndex[1];
    }
    if(guesses==6){
        return imageIndex[2];
    }
    if(guesses==5){
        return imageIndex[3];
    }
    if(guesses==4){
        return imageIndex[4];
    }
    if(guesses==3){
        return imageIndex[5];
    }
    if(guesses==2){
        return imageIndex[6];
    }
    if(guesses==1){
        return imageIndex[7];
    }
    if(guesses==0){
        return imageIndex[8];
    }
}