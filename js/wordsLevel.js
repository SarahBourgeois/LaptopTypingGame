// retrieve global html element
const elementList = document.querySelectorAll("#lettersList");
// global variables
var  count=0;
var wordLength = 0; // Init de word index
var listLetters = [];
var initWordLength; // length of the start word

//  Launch the game
randomWords();

// random words
function randomWords(){
    var arrayWords = ["ENFANT", "ECOLE", "JARDIN"];
    var item = arrayWords[Math.floor(Math.random()*arrayWords.length)]; 
    listLetters = [];
    for( var i=0; i<item.length; i++) {
        listLetters.push(item[i].toUpperCase());
    }
    lettersList.innerHTML  = item; 
    lettersList.innerHTML  = item; // call 2nd time because it's appears empty for jquery .
    initWordLength = item.length;
}

// function which change color letter 
String.prototype.replaceAt=function(index, replacement) {
    return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}
function setCharAt(str,index,chr) {
    if(index > str.length-1) return str;
    return str.substr(0,index) + chr + str.substr(index+1);
}

// compare between user is typing and the word
function wordsComparaison() {
  wordLength = lettersList.innerHTML.length; //retrieve lenght of the div word
     if(keyboard_id == listLetters[count].charCodeAt(0)) {
        lettersList.innerHTML = setCharAt(lettersList.innerHTML,wordLength - initWordLength, '<span style="color: green;">'+listLetters[count]+'</span>');
        count++; 
        initWordLength--; //cross the word from the end to the double letters
    }       
    if (listLetters.length == count) {
        flickerWord();
        count = 0;
        initWordLength = 0;
        setTimeout(randomWords, 3000); // set time to launch a new word 
    }    
}

// to do a flicker word
function flickerWord(){ 
    $("#lettersList").fadeOut(900).fadeIn(800); 
} 







   







         
      
  


    


         
  


    

