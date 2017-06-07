// retrieve global html element
const elementList = document.querySelectorAll("#lettersList");
var level = document.getElementById("level");
// global variables
var letters_id, keyboard_id, temp;
var score =0, number_life=3, diminish_timebar=100, count=0;
var wordLength = 0; // Init de word index
var listLetters = [];
var initWordLength = lettersList.innerHTML.length; // length of the start word


// ===================================
//  LAUNCH GAME FUNCTION
// ===================================
randomWords();


// ===================================
//  The timebar
// ===================================

// init timebar 
function time(){
clearTimeout(temp);
temp = setInterval(gameTimer, 100); 
}

// change size of the timer bar
function gameTimer() {
document.getElementById("time").style.width = diminish_timebar + "%";
diminish_timebar--;
time();
}


// ===================================
//  Caption of user is typing 
// ===================================

// function to catch what is typing
$( "body").keydown(function(event) {
  retrieveKey(event); 
});

// retrieve user key
function retrieveKey(event) {
keyboard_id = event.keyCode;
wordsComparaison();
time();
}


// ==============================
//  The words 
// ===============================

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
    initWordLength = lettersList.innerHTML.length;
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
           randomWords();
           count =0;
       }       
    }


// =========================
//  AUDIO 
// ==========================

// audio function to start
$( "#player" ).click(function() { // = function play(idPlayer,btn) {
  if ($("#audioPlayer")[0].paused == false) {  // = if (!player.paused) 
      $("#audioPlayer")[0].pause();
      $(this).html('<img src="image/pause.png"/>');
  } else {
      $("#audioPlayer")[0].play();
      $(this).html('<img src="image/play.png"/>');
  }
});

         
      
  


    


         
  


    

