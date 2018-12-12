// var startScreen = new StartScreen();
var dog1 = new Dog("dog1");
var dog2 = new Dog("dog2");


function launchStartAnimation() {
    // startScreen.hideStartScreen();
    document.getElementById("startScreen").style.display = "none";
    dog1.launchWalkoutAnimation();
}

function startGame() {
    alert("Start");
}