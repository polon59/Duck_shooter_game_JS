var currentLevel = 1;
var currentPoints = 0;


function levelUp() {
    if (currentLevel < 10) {
        currentLevel ++;
        changeAnimationSpeed();
        document.getElementById("pointsCount").innerHTML = currentLevel;
    } else {
        document.getElementById("pointsCount").innerHTML = "MAX";
    }
    
}

function addPoints(value) {
    currentPoints += value;

}