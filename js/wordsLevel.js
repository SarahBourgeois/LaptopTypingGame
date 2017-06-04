// retrieve global html element
const elementList = document.querySelectorAll("#lettersList");
var level = document.getElementById("level");
// global variables
var letters_id, keyboard_id;
var score =0, number_life=3, diminish_timebar=100, count =0;
var temp;
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
    var arrayWords = ["BITCH"];
    var item = arrayWords[Math.floor(Math.random()*arrayWords.length)]; 
    listLetters = [];
    for( var i=0; i<item.length; i++) {
        listLetters.push(item[i].toUpperCase());
    }
    lettersList.innerHTML  = item; 
}

// compare words 
function wordsComparaison() {
        if(keyboard_id == listLetters[count].charCodeAt(0)) {     
        lettersList.innerHTML = lettersList.innerHTML.replace(listLetters[count], '<span style="color: green;">'+listLetters[count]+'</span>');  
        count++;
        if (listLetters.length == count) {
            alert("Good job !!!");
            randomWords();
        }
    }
}


         
         
  


    

