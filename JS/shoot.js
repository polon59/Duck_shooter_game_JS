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
    var goBack = setTimeout(start, 500);
    playSound(emptyMag);
    duck1.isAlive = true;
    duck2.isAlive = true;
}


function shoot(){
    if (shotNumber == 10) {
        resetHitBoxImages();
    }

    magRounds--;
    changeShootBoxImage();
    playSound(shootSound);
    subtractShoots();
    shotNumber++;


    if (magRounds == 0 || killedDucks >= 2) {
        flyOut(duck1, duck2);
        startNewRound();
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
    var path = `url('../resources/sprites/scoreImages/shot/shot${magRounds}.png')`;
    document.getElementById("shots").style.backgroundImage = path;
}


function subtractShoots() {
    let duckWidth = 78;
    let duckHeight = 73;
    var x = event.clientX;
    var y = event.clientY;
    var duck1x = duck1element.offsetLeft;
    var duck1y = duck1element.offsetTop;
    var duck2x = duck2element.offsetLeft;
    var duck2y = duck2element.offsetTop;

    if ((x>=duck1x) && (x <= duck1x+73) && (y >= duck1y) && (y <= duck1y+78)) {
        duck1.isAlive = false;
        playSound(hit);
        killedDucks++;
        falldown("duck1",duck1x,duck1y);
        changeHitBoxImage("hit");
    }
    
    else if((x>=duck2x) && (x <= duck2x+73) && (y >= duck2y) && (y <= duck2y+78)){
        duck2.isAlive = false;
        playSound(hit);
        killedDucks++;
        falldown("duck2",duck2x,duck2y);
        changeHitBoxImage("hit");
        
    }
    else{
        playSound(miss);
        changeHitBoxImage("miss");
    }

}