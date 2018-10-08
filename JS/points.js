var currentLevel = 1;
var currentPoints = 0;
var successfulShots = 0;
var levelDisplay = document.getElementById("levelCount");
var pointsDisplay = document.getElementById("scoreCount");


function levelUp() {
    currentLevel ++;
    if (currentLevel < 10) {
        changeAnimationSpeed();
        levelDisplay.innerHTML = currentLevel;
    } else if (currentLevel == 10){
        levelDisplay.innerHTML = "MAX";
    }
    else{
        finishGame();
    }
}

function addPoints() {
    successfulShots += 1;
    currentPoints += 10+currentLevel;
    pointsDisplay.innerHTML = currentPoints;

}


function finishGame(params) {
    alert("Killed : " + successfulShots)
}