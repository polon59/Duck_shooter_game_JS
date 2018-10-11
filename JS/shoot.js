var hit = new Audio('../resources/sounds/hit.wav');
var miss = new Audio('../resources/sounds/miss.wav');
var emptyMag = new Audio('../resources/sounds/emptyMag.wav');
var shootSound = new Audio('../resources/sounds/shoot.wav');
var duckHitSound = new Audio('../resources/sounds/shoot.wav');

var duck1element = document.getElementById("duck1");
var duck2element = document.getElementById("duck2");
var magRounds = 3;
var shotNumber = 0;
var killedDucks = 0;

var duck1 =  {id:"duck1", isAlive:true};
var duck2 =  {id:"duck2", isAlive:true};


function resetKilledDucksNumber() {
    killedDucks = 0;
}


function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}
   

function resetMagRounds() {
    magRounds = 3;
    changeShootBoxImage();
}


function startNewRound() {
    var dog2 = document.getElementById("dog2").classList.remove("easingOut");
    var goBack = setTimeout(start, 500);
    playSound(emptyMag);
    duck1.isAlive = true;
    duck2.isAlive = true;
}


function shoot(){
    if (shotNumber == 10) {
        resetHitBoxImages();
        levelUp();
    }

    magRounds--;
    changeShootBoxImage();
    playSound(shootSound);
    subtractShoots();
    shotNumber++;

    if (magRounds == 0 || killedDucks >= 2) {
        flyOut(duck1, duck2);
        showDog2(killedDucks);   
        setTimeout(startNewRound,3000);
        //startNewRound();
    }
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
        playSound(miss);
        changeHitBoxImage("miss");
    }
}


function checkIfHit(mouseX,mouseY,duckX,duckY) {
    let duckWidth = 78;
    let duckHeight = 73;

    if ((mouseX>=duckX) && (mouseX <= duckX+duckHeight) && 
    (mouseY >= duckY) && (mouseY <= duckY+duckWidth)){
        changeHitBoxImage("hit");        
        playSound(hit);
        killedDucks++;
        addPoints();
        return true;
    }
    else{
        return false;
    }
}