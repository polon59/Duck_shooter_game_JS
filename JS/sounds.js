var hit = new Audio('../resources/sounds/hit.wav');
var miss = new Audio('../resources/sounds/miss.wav');
var emptyMag = new Audio('../resources/sounds/emptyMag.wav');
var shootSound = new Audio('../resources/sounds/shoot.wav');
var gotOne = new Audio('../resources/sounds/gotOne.wav');
var gotZero = new Audio('../resources/sounds/gotZero.wav');



function playSound(name) {
    var sound;

    if (name == "shoot") {
        sound = shootSound;
        console.log("SHOOT");
    }else if (name == "miss") {
        sound = miss;
        console.log("MISS");
    }else if (name == "empty") {
        sound = emptyMag;
        console.log("EMPTY");
    }else if (name == "hit"){
        sound = hit;
        console.log("HIT");
    }else if (name == "gotOne"){
        sound = gotOne;
        console.log("GOT ONE");
    }else{
        sound = gotZero;
        console.log("GOT ZERO");
    }


    sound.currentTime = 0;
    sound.play();
}