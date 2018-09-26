var duck1 = document.getElementById("duck1");
var duck2 = document.getElementById("duck2");
var shootSound = new Audio('../resources/sounds/shoot.wav');
var duckHitSound = new Audio('../resources/sounds/shoot.wav');
var hit = new Audio('../resources/sounds/hit.wav');
var miss = new Audio('../resources/sounds/miss.wav');
var emptyMag = new Audio('../resources/sounds/emptyMag.wav');
var shotNumber = 3;


function dupa(params) {
    shoot();
}


function playSound(sound) {
    sound.currentTime = 0;
    sound.play();
}


function shoot(){
    if (shotNumber == 0) {
        playSound(emptyMag);
    } else {
        playSound(shootSound);
        subtractShoots();
        shotNumber--;
        changeShootBoxImage(null);

    }
    
}

function changeShootBoxImage(value) {
    if (value != null) {
        shotNumber = value;
    }
    var path = "url('../resources/sprites/scoreImages/shot/shot" + shotNumber +".png')";
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

    console.log("x: " + x + "     y: " + y);
    console.log("DUCK x: " + duck1x + "," + (duck1x + duckWidth) +  "    DUCK y: " + duck1y + "," + (duck1y+duckHeight));
    
    if ((x>=duck1x) && (x <= duck1x+73) && (y >= duck1y) && (y <= duck1y+78)) {
        // duck1.click();
        playSound(hit);
    }
    else if((x>=duck2x) && (x <= duck2x+73) && (y >= duck2y) && (y <= duck2y+78)){
        // duck2.click();
        playSound(hit);
    }
    else{
        playSound(miss);
    }

}