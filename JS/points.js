var currentLevel = 1;
var currentPoints = 0;
var successfulShots = 0;
var levelDisplay = document.getElementById("levelCount");
var pointsDisplay = document.getElementById("scoreCount");


function levelUp() {
    if (currentLevel < 10) {
        currentLevel ++;
        changeAnimationSpeed();
        levelDisplay.innerHTML = currentLevel;
    } else {
        levelDisplay.innerHTML = "MAX";
    }
    
}

function addPoints() {
    currentPoints += 10+currentLevel;
    pointsDisplay.innerHTML = currentPoints;

}