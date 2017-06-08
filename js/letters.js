// retrieve global html element
var lettres =document.querySelectorAll("#lettersList");
var level = document.getElementById("level");
var score =0, number_life=3, diminish_timebar=100;
var temp;
var listLetters = [];

// 
randomLetters();

// display random letters
function randomLetters() {
    var items = ["A", "B","C", "D","E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    var item = items[Math.floor(Math.random()*items.length)]; // select random item into the array
    letters_id = item;
    lettersList.innerHTML  = item; 
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






