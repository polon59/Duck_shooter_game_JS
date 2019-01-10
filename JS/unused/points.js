var currentLevel = 1;
var currentPoints = 0;
var successfulShots = 0;
var levelNumber = 5;
var levelSelectBox = document.getElementById("levelSelect");
var levelDisplay = document.getElementById("levelCount");
var pointsDisplay = document.getElementById("scoreCount");
var levelBox = document.getElementById("levelBox");
var levelBoxP = document.getElementById("levelBoxP");


function levelUp() {
    currentLevel ++;

    if (currentLevel <= levelNumber) {
        changeAnimationSpeed();
        levelDisplay.innerHTML = currentLevel;
        levelBoxP.innerHTML = `LEVEL: ${currentLevel}`
    } else if (currentLevel == levelNumber){
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
    addNewrecord(currentPoints);
    document.getElementById("overlay").style.display = "block";
}

function displaySummary() {
    document.getElementById("pointsSummary").innerHTML = currentPoints;
    document.getElementById("roundSummary").innerHTML = currentLevel;
    document.getElementById("shotsSummary").innerHTML = successfulShots;
    
}

levelSelect

function levelSelectAdd() {
    if (levelNumber < 10) {
        levelNumber ++;
        levelSelectBox.innerHTML = levelNumber;
    }
}


function levelSelectSubtract() {
    if (levelNumber > 1) {
        levelNumber --;
        levelSelectBox.innerHTML = levelNumber;
    }
}