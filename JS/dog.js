var dog = document.getElementById("dog");
dog.addEventListener("animationend",startSniffing)

// walkOut();

// function walkOut() {
//     dog.addEventListener("animationiteration",startSniffing)
// }

function hideDog() {
    dog.style.visibility = "hidden";
    start();
}

function startSniffing() {
    dog.style.animationName = "dogSniff1";
    dog.style.backgroundImage = 'url("../resources/sprites/dog/snif.gif")';
    dog.addEventListener("animationend",startWalk2)
}

function startWalk2() {
    dog.style.animationName = "dogWalk2";
    dog.style.backgroundImage = 'url("../resources/sprites/dog/dogeWalking.gif")';
    dog.addEventListener("animationend",startSniffing2);
}

function startSniffing2() {
    dog.style.animationName = "dogSniff2";
    dog.style.backgroundImage = 'url("../resources/sprites/dog/snif.gif")';
    dog.addEventListener("animationend",startJump)
}

function startJump() {
    console.log("TO sie kameruje")
    dog.style.animationDuration = "0.7s";
    dog.style.animationName = "dogJump";
    dog.style.backgroundImage = 'url("../resources/sprites/dog/pawelJumper.gif")';
    dog.addEventListener("animationend", hideDog);
}
