var dog1 = document.getElementById("dog1");
dog1.addEventListener("animationend",startSniffing)

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
