var duck1 = document.getElementById("duck1");
var duck2 = document.getElementById("duck2");
var shootSound = new Audio('../resources/sounds/shoot.wav');
var duckHitSound = new Audio('../resources/sounds/shoot.wav');
var hit = new Audio('../resources/sounds/hit.wav');
var miss = new Audio('../resources/sounds/miss.wav');
var emptyMag = new Audio('../resources/sounds/emptyMag.wav');
var magRounds = 4;
var shotNumber = 0;
var killedDucks = 0;


function resetKilledDucksNumber() {
    killedDucks = 0;
}


function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}
   

function resetMagRounds() {
    magRounds = 4;
    changeShootBoxImage();
}

function shoot(){
    if (magRounds == 1) {
        playSound(emptyMag);
        flyOut();
    }
    else{
        magRounds--;
        changeShootBoxImage();
        playSound(shootSound);
        subtractShoots();
        shotNumber++;
        
    }

    
}

function changeHitBoxImage() {
    console.log("SN: " + shotNumber)
    var elementId = "hitbox" + shotNumber;
    document.getElementById(elementId).style.backgroundImage = "url('../resources/sprites/scoreImages/hit/duckred.png')";
}

function changeShootBoxImage() {
    var path = "url('../resources/sprites/scoreImages/shot/shot" + magRounds +".png')";
    document.getElementById("shots").style.backgroundImage = path;
}



function subtractShoots() {
    var duckWidth = 78;
    var duckHeight = 73;
    var x = event.clientX;
    var y = event.clientY;
    var duck1x = duck1.offsetLeft;
    var duck1y = duck1.offsetTop;
    var duck2x = duck2.offsetLeft;
    var duck2y = duck2.offsetTop;

    if ((x>=duck1x) && (x <= duck1x+73) && (y >= duck1y) && (y <= duck1y+78)) {
        playSound(hit);
        killedDucks++;
        falldown("duck1",duck1x,duck1y);
        changeHitBoxImage();

        console.log(killedDucks);

        if (killedDucks >= 2) {
            start();
        }
    }
    
    else if((x>=duck2x) && (x <= duck2x+73) && (y >= duck2y) && (y <= duck2y+78)){
        playSound(hit);
        killedDucks++;
        falldown("duck2",duck2x,duck2y);
        changeHitBoxImage();

        console.log(killedDucks);

        if (killedDucks >= 2) {
            start();
        }
    }
    else{
        playSound(miss);
    }

}