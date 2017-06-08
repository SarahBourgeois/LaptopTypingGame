// retrieve global html element
var lettres =document.querySelectorAll("#lettersList");
var level = document.getElementById("level");
// global variables
var letters_id, keyboard_id;
var score =0, number_life=3, diminish_timebar=100;
var temp;
var listLetters = [];
// call function to launch the game
randomLetters();

// init timebar 
function time(){
clearTimeout(temp);
temp = setInterval(gameTimer, 100); 
playerLife();
}

// change size of the timer bar
function gameTimer() {
document.getElementById("time").style.width = diminish_timebar + "%";
diminish_timebar--;
time();
}


// display random letters
function randomLetters() {
var items = ["A", "B","C", "D","E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var item = items[Math.floor(Math.random()*items.length)]; // select random item into the array
letters_id = item.toUpperCase();
lettersList.innerHTML  = item; 
}

// retrieve user key
function retrieveKey(event) {
keyboard_id = event.key;
comparaison();
time();
}


// player number of life
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


// compare display letters and user's action 
function comparaison() {
if(letters_id ==keyboard_id.toUpperCase()){
    if(score <10) {
        diminish_timebar = 100; // ajust time bar 
        level.innerHTML= "Level 1 ";
     
    }
    else if (score >=10 && score <20) {
        diminish_timebar = 85;
        level.innerHTML = "Level 2 ";
            
    }
    else if (score >=20 && score <35) {
        diminish_timebar = 70;
        level.innerHTML = "Level 3";
    }
    else if (score >=35 && score < 45) {
        diminish_timebar= 55;
        level.innerHTML = "Level 4 ";
    }
    else if (score >=45 && score<55) {
        diminish_timebar=30;
        level.innerHTML = "Level 5";
    }
    else if (score >=55 && score <75) {
        diminish_timebar=15;
        level.innerHTML="Level 6"
    }
    if (score >= 75) {
        diminish_timebar = 15;
        level.innerHTML="Hero level";
    }
    score++;
    randomLetters();
    gameTimer();   
    document.getElementById("score").innerHTML = "Score : " + score;
}
if (letters_id != keyboard_id && diminish_timebar==0) {
    diminish_timebar = diminish_timebar - 20;
    gameTimer(); 
    }
}


/* =============================
/ GAME DESIGN AND OPTIONS
  ============================ */

// suppress a life picture when player loose 
function hideLife(number_life) {
if (number_life ==2) {
document.getElementById("image3").style.visibility="hidden";      
}
if (number_life ==1) {
document.getElementById("image2").style.visibility="hidden";
}
}

// audio function to start
function play(idPlayer,btn) {
var player = document.querySelector('#' + idPlayer);
if (player.paused) {
    player.play();
    btn.innerHTML='<img src="image/play.png"/>'
} 
else {
    player.pause(); 
    btn.innerHTML='<img src="image/pause.png"/>'
    }
}
// audio function to stop
function resume(idPlayer) {
    var player = document.querySelector('#' + idPlayer);
    player.currentTime = 0;
    player.pause();
}




// send your score 
function formSendScore() {
var pseudo =document.getElementById("pseudo").value;
var email = document.getElementById("mail").value;

if (pseudo.length<6) {
alert("Your pseudo must contain 6 characters minimum please")
}
}