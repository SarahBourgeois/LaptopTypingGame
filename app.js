// retrieve global html element
var lettres =document.querySelectorAll("#lettersList");
var level = document.getElementById("level");
// global variables
var letters_id, keyboard_id;
var score =0, number_life=2, diminish_timebar=100;
var temp;

// call function to launch the game
randomLetters();
document.getElementById("number_life").innerHTML = "Life : " + number_life;


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
    letters_id = items.indexOf(item); // search into array index
    lettersList.innerHTML  = item; 
}

// retrieve user key
function retrieveKey(event) {
    var e = event.keyCode;
    keyboard_id = e - 65 // array match index
    comparaison();
    time();
}

// player number of life
function playerLife() {
    if (diminish_timebar == 0 && number_life>0) {
        number_life--;
        document.getElementById("number_life").innerHTML = "Life : " + number_life;
        gameTimer();
        time();
    }
    if(diminish_timebar <3 && number_life ==0) {
        level.innerHTML = "GAME OVER ! Your score is : " + score;
        // TODO : Add a form to register the player
    }
}

// compare display letters and user's action 
function comparaison() {

    if(letters_id ==keyboard_id){
        if(score <10) {
            diminish_timebar = 100; // ajust time bar 
            level.innerHTML= "Level 1 : Children";
        }
        else if (score >=10 && score <20) {
            diminish_timebar = 85;
            level.innerHTML = "Level 2 : Padawan";
        }
        else if (score >=20 && score <35) {
            diminish_timebar = 70;
            level.innerHTML = "Level 3 : Good guy";
        }
        else if (score >=35 && score < 50) {
            diminish_timebar= 50;
            level.innerHTML = "Level 4 : Jedi";
        }
        else if (score >=50 && score<65) {
            diminish_timebar=30;
            level.innerHTML = "Level 5 : Boss !";
        }
        else {
            diminish_timebar = 30;
            level.innerHTML="Level 6 : You're a heroe !!!";
        }
    randomLetters();
    gameTimer();
    score++;
    document.getElementById("score").innerHTML = "Score : " + score;
    }
    if (letters_id != keyboard_id && diminish_timebar==0) {
        number_life--;
        diminish_timebar = diminish_timebar - 20;
        gameTimer(); 
    }
}



var byline = document.getElementById('byline');     // Find the H2
bylineText = byline.innerHTML;                                      // Get the content of the H2
bylineArr = bylineText.split('');                                   // Split content into array
byline.innerHTML = '';                                                      // Empty current content

var span;                   // Create variables to create elements
var letter;

for(i=0;i<bylineArr.length;i++){                                    // Loop for every letter
  span = document.createElement("span");                    // Create a <span> element
  letter = document.createTextNode(bylineArr[i]);   // Create the letter
  if(bylineArr[i] == ' ') {                                             // If the letter is a space...
    byline.appendChild(letter);                 // ...Add the space without a span
  } else {
        span.appendChild(letter);                       // Add the letter to the span
    byline.appendChild(span);                   // Add the span to the h2
  }
}

// send your score 
function formSendScore() {
var pseudo =document.getElementById("pseudo").value;
var email = document.getElementById("mail").value;

if (pseudo.length<6) {
  alert("Your pseudo must contain 6 characters minimum please")
  }
}