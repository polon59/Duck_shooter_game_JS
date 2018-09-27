var duck1 = document.getElementById("duck1");
var duck2 = document.getElementById("duck2");
var shootSound = new Audio('../resources/sounds/shoot.wav');
var duckHitSound = new Audio('../resources/sounds/shoot.wav');
var hit = new Audio('../resources/sounds/hit.wav');
var miss = new Audio('../resources/sounds/miss.wav');
var emptyMag = new Audio('../resources/sounds/emptyMag.wav');
var magRounds = 3;
var shotNumber = 0;


function dupa(params) {
    if (shotNumber == 10) {
        alert("gameOver");
    } else {
        shotNumber++;
        shoot();
    }
}


function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}


function shoot(){
    if (magRounds == 0) {
        playSound(emptyMag);
        changeShootBoxImage(3); //FOR TESTING
    } else {
        playSound(shootSound);
        subtractShoots();
        magRounds--;
        changeShootBoxImage(null);
    }
    
}

function changeHitBoxImage() {
    var path = "url('../resources/sprites/scoreImages/hit/duckred.png');"
     document.getElementById("hitbox4").style.backgroundImage = path;

    console.log("KKKKKKKKKKKKKKKKKKURWAAAAAAAAAAAAAAAA   " + "hitbox"+shotNumber)

    // }
}

function changeShootBoxImage(value) {
    if (value != null) {
        magRounds = value;
    }
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
        // duck1.click();
        playSound(hit);
        falldown("duck1",duck1x,duck1y);
        changeHitBoxImage();
    }
    else if((x>=duck2x) && (x <= duck2x+73) && (y >= duck2y) && (y <= duck2y+78)){
        // duck2.click();
        playSound(hit);
        falldown("duck2",duck2x,duck2y);
        changeHitBoxImage();
    }
    else{
        playSound(miss);
    }

}