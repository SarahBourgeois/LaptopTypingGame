// retrieve global html element
var lettres =document.querySelectorAll("#lettersList");
var level = document.getElementById("level");
// global variables
var letters_id, keyboard_id;
var score =0, number_life=3, diminish_timebar=100;
var temp;
var count =0;
var listLetters = [];
// call function to launch the game
randomWords();

// init timebar 
function time(){
clearTimeout(temp);
temp = setInterval(gameTimer, 100); 
}

// retrieve user key
function retrieveKey(event) {
keyboard_id = event.keyCode;
alert("keyboard id " + keyboard_id);
wordsComparaison();
time();
}


// change size of the timer bar
function gameTimer() {
document.getElementById("time").style.width = diminish_timebar + "%";
diminish_timebar--;
time();
}

// random words
function randomWords(){
    var arrayWords = ["bitch"];
    var item = arrayWords[Math.floor(Math.random()*arrayWords.length)]; 
    listLetters = [];
    for( var i=0; i<item.length; i++) {
        listLetters.push(item[i].toUpperCase());
    }
    lettersList.innerHTML  = item; 
}


// compare words 
function wordsComparaison() {

  // check count index -> if index 1 --> == keyboard id ==> ok on
  // passe a l'index 2 et ainsi de suite -> sinon diminue la timebar
  // ou alors on compare avec le tableau de lettre abcd etc avec la
  // technique du 1er js...  
     if(keyboard_id == listLetters[count].charCodeAt(0)) {
         alert("good");
         for (var i=0; i<lettres.length; i++) {
            lettres[i].style.color="red";
         }
         count++;
  }

}
    

