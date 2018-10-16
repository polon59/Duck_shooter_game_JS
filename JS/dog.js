var dog1 = document.getElementById("dog1");
var dog2 = document.getElementById("dog2");


function startDogWalkout() {
    dog1.style.animationName = "dogWalk1";
    dog1.addEventListener("animationend",startSniffing);
    playSound("dogwalk");
}

// walkOut();

// function walkOut() {
//     dog.addEventListener("animationiteration",startSniffing)
// }

function hideDog() {
    dog1.style.visibility = "hidden";
    start();
}

function startSniffing() {
    dog1.style.animationName = "dogSniff1";
    dog1.style.backgroundImage = 'url("../resources/sprites/dog/snif.gif")';
    dog1.addEventListener("animationend",startWalk2)
}

function startWalk2() {
    dog1.style.animationName = "dogWalk2";
    dog1.style.backgroundImage = 'url("../resources/sprites/dog/dogeWalking.gif")';
    dog1.addEventListener("animationend",startSniffing2);
}

function startSniffing2() {
    dog1.style.animationName = "dogSniff2";
    dog1.style.backgroundImage = 'url("../resources/sprites/dog/snif.gif")';
    dog1.addEventListener("animationend",startJump)
}

function startJump() {
    dog1.style.animationDuration = "0.7s";
    dog1.style.animationName = "dogJump";
    dog1.style.backgroundImage = 'url("../resources/sprites/dog/pawelJumper.gif")';
    dog1.addEventListener("animationend", hideDog);
}



function showDog2(killedDucks) {
    dog2.classList.add("easingOut");

    if (killedDucks == 0) {
        dog2.style.backgroundImage = 'url("../resources/sprites/dog/bk.gif")';
        playSound("gotZero");

    } else if(killedDucks == 1) {
        dog2.style.backgroundImage = 'url("../resources/sprites/dog/gotOne.png")';
        playSound("gotOne");
    } else{
        dog2.style.backgroundImage = 'url("../resources/sprites/dog/gotTwo.png")';
        playSound("gotOne");
    }
}
