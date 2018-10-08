var currentLevel = 1;
var currentPoints = 0;


function levelUp() {
    currentLevel ++;
    document.getElementById("pointsCount").innerHTML = currentLevel;
}

function addPoints(value) {
    currentPoints += value;
    
}