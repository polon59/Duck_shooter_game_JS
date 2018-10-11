var currentLevel = 1;
var currentPoints = 0;
var successfulShots = 0;
var levelDisplay = document.getElementById("levelCount");
var pointsDisplay = document.getElementById("scoreCount");
var levelBox = document.getElementById("levelBox");
var levelBoxP = document.getElementById("levelBoxP");


function levelUp() {
    currentLevel ++;

    if (currentLevel < 5) {
        changeAnimationSpeed();
        levelDisplay.innerHTML = currentLevel;
        levelBoxP.innerHTML = `LEVEL: ${currentLevel}`
    } else if (currentLevel == 5){
        levelDisplay.innerHTML = "MAX";
    }
    else{
        finishGame();
    }

    levelBox.style.display = "block";
}



function hideLevelUpBox() {
    levelBox.classList.remove("flashing");
}

function addPoints() {
    successfulShots += 1;
    currentPoints += 10+currentLevel;
    pointsDisplay.innerHTML = currentPoints;
}


function finishGame(params) {
    displaySummary();
    document.getElementById("overlay").style.display = "block";
}

function displaySummary() {
    document.getElementById("pointsSummary").innerHTML = currentPoints;
    document.getElementById("roundSummary").innerHTML = currentLevel;
    document.getElementById("shotsSummary").innerHTML = successfulShots;
    
}