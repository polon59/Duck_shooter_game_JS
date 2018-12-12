class Dog{

    constructor(id){
        this.dogId = `#${id}`;
    }

    launchWalkoutAnimation(){
        let walkBackground = "url(../resources/sprites/dog/dogeWalking.gif)";
        let sniffBackground = "url(../resources/sprites/dog/snif.gif)";
        let stopBackground = "url(../resources/sprites/dog/found.png)";
        let jumpBackground = "url(../resources/sprites/dog/pawelJumper.gif)";

        $(this.dogId)
        .animate({left: "20%",}, 2000 ,function(){
            $(this).css("background-image", sniffBackground)
        })
        .animate({left: "20%",}, 1000 ,function(){
            $(this).css("background-image", walkBackground);
        })
        .animate({left: "40%",}, 2000 ,function(){
            $(this).css("background-image", sniffBackground);
        })
        .animate({left: "40%",}, 1000 ,function(){
            $(this).css("background-image", stopBackground);
        })
        .animate({left: "40%",}, 500 ,function(){
            $(this).css("background-image", jumpBackground)
            .css("animation-name", "dogJump")
        })
        .animate({opacity: "40%",}, 700 ,function(){
            $(this).css("display", "none");
        })
    }

}



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







// function showDog2(killedDucks) {
//     dog2.classList.add("easingOut");

//     if (killedDucks == 0) {
//         dog2.style.backgroundImage = 'url("../resources/sprites/dog/bk.gif")';
//         playSound("gotZero");

//     } else if(killedDucks == 1) {
//         dog2.style.backgroundImage = 'url("../resources/sprites/dog/gotOne.png")';
//         playSound("gotOne");
//     } else{
//         dog2.style.backgroundImage = 'url("../resources/sprites/dog/gotTwo.png")';
//         playSound("gotOne");
//     }
// }