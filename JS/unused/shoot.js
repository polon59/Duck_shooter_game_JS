var duck1element = document.getElementById("duck1");
var duck2element = document.getElementById("duck2");
var shootBlocker = document.getElementById("shootBlocker");
var magRounds = 3;
var shotNumber = 0;
var killedDucks = 0;

var duck1 =  {id:"duck1", isAlive:true};
var duck2 =  {id:"duck2", isAlive:true};



function enableShooting() {
    shootBlocker.style.display = "none";
}


function disableShooting() {
    shootBlocker.style.display = "block";
}


function resetKilledDucksNumber() {
    killedDucks = 0;
}
   

function resetMagRounds() {
    magRounds = 3;
    changeShootBoxImage();
}


function startNewRound() {
    // var goBack = setTimeout(start, 500);
    duck1.isAlive = true;
    duck2.isAlive = true;
    document.getElementById("dog2").classList.remove("easingOut");
    document.getElementById("levelBox").style.display = "none";
    start();
}


function shoot(){
    magRounds--;
    changeShootBoxImage();
    playSound("shoot");
    subtractShoots();
    shotNumber++;

    if (magRounds == 0 || killedDucks >= 2) {
        finishRound();
    }

    if (shotNumber == 10) {
        finishLevel();
    }
}


function finishLevel() {
    disableShooting();
    flyOut(duck1, duck2);
    playSound("level");
    resetHitBoxImages();
    levelUp();
    setTimeout(startNewRound,3000);
}


function finishRound(params) {
    disableShooting();
    flyOut(duck1, duck2);
    showDog2(killedDucks);   
    setTimeout(startNewRound,3000);
}


function resetHitBoxImages() {
    shotNumber = 0;

    while (shotNumber < 10) {
        changeHitBoxImage("reset");
        shotNumber++;
    }
    shotNumber = 0;
}


function changeHitBoxImage(mode) {
    var hitBox = document.getElementById("hitbox" + shotNumber);

    if (mode == "miss") {
        hitBox.style.backgroundImage = "url('../resources/sprites/scoreImages/hit/duckblack.png')";                
    }else if (mode == "reset"){
        hitBox.style.backgroundImage = "url('../resources/sprites/scoreImages/hit/duckwhite.png')";
    }else {
        hitBox.style.backgroundImage = "url('../resources/sprites/scoreImages/hit/duckred.png')";        
    }
}


function changeShootBoxImage() {
    if (magRounds<0) {
        var path = `url('../resources/sprites/scoreImages/shot/shot0.png')`;
        document.getElementById("shots").style.backgroundImage = path;
    }else{
        var path = `url('../resources/sprites/scoreImages/shot/shot${magRounds}.png')`;
        document.getElementById("shots").style.backgroundImage = path;
    }
}


function subtractShoots() {
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    var duck1x = duck1element.offsetLeft;
    var duck1y = duck1element.offsetTop;
    var duck2x = duck2element.offsetLeft;
    var duck2y = duck2element.offsetTop;

    if (checkIfHit(mouseX,mouseY,duck1x,duck1y)) {
        duck1.isAlive = false;
        falldown("duck1",duck1x,duck1y); 
    }
    else if(checkIfHit(mouseX,mouseY,duck2x,duck2y)){
        duck2.isAlive = false;
        falldown("duck2",duck2x,duck2y);
    }
    else{
        playSound("miss");
        changeHitBoxImage("miss");
    }
}


function checkIfHit(mouseX,mouseY,duckX,duckY) {
    let duckWidth = 78;
    let duckHeight = 73;

    if ((mouseX>=duckX) && (mouseX <= duckX+duckHeight) && 
    (mouseY >= duckY) && (mouseY <= duckY+duckWidth)){
        changeHitBoxImage("hit");        
        playSound("hit");
        killedDucks++;
        addPoints();
        return true;
    }
    else{
        return false;
    }
}