/**
 * General file for the game
 * @Sarah Bourgeois 
 */

var score =0, number_life=3, diminish_timebar=100;
var temp, keyboard_id;


// ===================================
//  Start the game
// ===================================
var id = 1;// TODO RETRIEVE ID LEVEL USER CHOOSE
startGame();

function startGame() {
    switch (id){
        case 1 : randomLetters();
        break;
        case 2 : randomWords();
        default : 
        break;
    }
}

// ===================================
//  The timebar
// ===================================
// init timebar 
function time(){
clearTimeout(temp);
temp = setInterval(gameTimer, 100); 
}

// change size of the timer bar and life
function gameTimer() {
document.getElementById("time").style.width = diminish_timebar + "%";
diminish_timebar--;
playerLife();
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
    keyboard_id = event.key;
    switch (id) {
        case 1 : comparaison();
        break;
        case 2 : wordsComparaison();
        break;
        default : break;
   }
    time();
}

// =========================
//   player  life
// ==========================
function playerLife() {
    if (diminish_timebar == 0 && number_life>0) {
        number_life--;
        gameTimer();
        time();
        hideLife(number_life); 
    }
    if(diminish_timebar < 3 && number_life ==0) {
        level.innerHTML = "GAME OVER ! Your score is : " + score;
        }
}

// suppress a life picture when player loose 
function hideLife(number_life) {
    if (number_life ==2) {
        document.getElementById("image3").style.visibility="hidden";      
    }
    if (number_life ==1) {
        document.getElementById("image2").style.visibility="hidden";
    }
    if (number_life == 0) {
        document.getElementById("image").style.visibility="hidden"
        document.getElementById("sendscore").hidden="";
    }
}

// =========================
//  BREAK GAME
// ==========================
$( "#break" ).click(function() { // 
        alert("pause");
});
