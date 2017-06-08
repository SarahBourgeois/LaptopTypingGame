/**
 * General file for the game
 * by @Sarah Bourgeois 
 */
var score =0, number_life=3, diminish_timebar=100;
var temp, keyboard_id;

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
// retrieve user key
function retrieveKey(event) {
    keyboard_id = event.key;
    wordsComparaison();
    //comparaison();
    time();
}

// function to catch what is typing
$( "body").keydown(function(event) {
  retrieveKey(event); 
});


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
if(diminish_timebar <3 && number_life ==0) {
    level.innerHTML = "GAME OVER ! Your score is : " + score;
    document.getElementById("sendscore").hidden="";
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
}


// =========================
//  AUDIO 
// ==========================
// audio function to start= function play(idPlayer,btn) in html
$( "#btn" ).click(function() { // 
  if ($("#audioPlayer")[0].paused == false) { 
      $("#audioPlayer")[0].pause();
      $(this).html('<img src="image/pause.png"/>');
  } else {
      $("#audioPlayer")[0].play();
      $(this).html('<img src="image/play.png"/>');
  }
});
