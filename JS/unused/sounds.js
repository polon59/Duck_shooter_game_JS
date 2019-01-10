var hit = new Audio('../resources/sounds/hit.wav');
var miss = new Audio('../resources/sounds/miss.wav');
var emptyMag = new Audio('../resources/sounds/emptyMag.wav');
var shootSound = new Audio('../resources/sounds/shoot.wav');
var gotOne = new Audio('../resources/sounds/gotOne.wav');
var gotZero = new Audio('../resources/sounds/gotZero.wav');
var duck = new Audio('../resources/sounds/duck.wav');
var level = new Audio('../resources/sounds/level.mp3');
var intro = new Audio('../resources/sounds/intro.mp3');
var dogwalk = new Audio('../resources/sounds/dogwalk.mp3')
var duckfall = new Audio('../resources/sounds/duckfall.wav')



function playSound(name) {
    var sound;

    if (name == "shoot") {
        sound = shootSound;
    }
    else if (name == "duckfall"){
        sound = duckfall;
    }
    else if (name == "dogwalk"){
        intro.pause();
        sound = dogwalk;
    }
    else if (name == "miss") {
        sound = miss;
    }
    else if (name == "level") {
        sound = level;
    }
    else if (name == "empty") {
        sound = emptyMag;
    }
    else if (name == "hit"){
        sound = hit;
    }
    else if (name == "gotOne"){
        sound = gotOne;
        duck.pause();
        duck.currentTime = 0;
    }
    else if (name == "gotZero"){
        sound = gotZero;
        duck.pause();
        duck.currentTime = 0;
    }
    else if (name == "intro"){
        sound = intro;
    }
    else{
        sound = duck;
    }

    sound.currentTime = 0;
    sound.play();
}