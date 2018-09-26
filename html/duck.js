var style;
var duckDirections = [];
var duckDirectionsIndex = 0;


var previousWidth = null;
var previousHeight = null;


var changeCounter = 0;
var duck1 = document.getElementById("duck1");
var i = 0;

var myVar = 0;

function start() {
    clearInterval(myVar);
    duckDirections = [];
    changeAnimations();
    // myVar = setInterval(changeDucksImages, 2000);
    // var myVar = setTimeout(changeDucksImages, 1000);   
}

// function removeIntervalImgChange(params) {
//     if (myVar != 0) {
//         clearInterval(myVar);
//     }
// }

// function changeDucksImages() {
//     document.getElementById("duck1").style.backgroundImage = "url('../resources/sprites/duck/" + 
//     duckDirections[duckDirectionsIndex] + ".png')";
//     duckDirectionsIndex ++;
//     if (duckDirectionsIndex == duckDirections.length) {
//         duckDirectionsIndex = 0;
//     }
//     console.log(duckDirectionsIndex);
// }

function changeAnimations() {
    changeAnimation("duck1");
    flapWings();
    changeAnimation("duck2");
    // changeAnimation("duck3");
    changeCounter ++;
}


function changeAnimation(duckID) {
    style = document.documentElement.appendChild(document.createElement("style"));
    rule = "@keyframes " + duckID + "{\
        0%   {left: " + getRandomWidth(duckID,30,60) + "%; bottom:" + getRandomHeight(duckID,20,20) + "%;}\
        10%  {left:" + getRandomWidth(duckID,1,90) +"%; bottom:" + getRandomHeight(duckID,35,70) + "%;}\
        20%  {left:" + getRandomWidth(duckID,1,90) +"%; bottom:" + getRandomHeight(duckID,35,70) + "%;}\
        30%  {left:" + getRandomWidth(duckID,1,90) +"%; bottom:" + getRandomHeight(duckID,35,70) + "%;}\
        40%  {left:" + getRandomWidth(duckID,1,90) +"%; bottom:" + getRandomHeight(duckID,35,70) + "%;}\
        50%  {left:" + getRandomWidth(duckID,1,90) +"%; bottom:" + getRandomHeight(duckID,35,70) + "%;}\
        60%  {left:" + getRandomWidth(duckID,1,90) +"%; bottom:" + getRandomHeight(duckID,35,70) + "%;}\
        70%  {left:" + getRandomWidth(duckID,1,90) +"%; bottom:" + getRandomHeight(duckID,35,70) + "%;}\
        80%  {left:" + getRandomWidth(duckID,1,90) +"%; bottom:" + getRandomHeight(duckID,35,70) + "%;}\
        90%  {left:" + getRandomWidth(duckID,1,90) +"%; bottom:" + getRandomHeight(duckID,35,70) + "%;}\
        100% {left:" + getRandomWidth(duckID,1,90) +"%; bottom:" + getRandomHeight(duckID,100,100) + "%;}\
    }";
    // if (CSSRule.KEYFRAMES_RULE) {p
        style.sheet.insertRule(rule, 0);
    // } else if (CSSRule.WEBKIT_KEYFRAMES_RULE) { // WebKit
    //     style.sheet.insertRule("@-webkit-keyframes" + rule, 0);
    // }
}

function getRandomWidth(duckID,min,max) {
    var generatedWidth = Math.floor(Math.random() * (max - min + 1)) + min;

    // if (generatedWidth > previousWidth){
    //     duckDirections.push("left");
    // } else {
    //     duckDirections.push("right");
    previousWidth = generatedWidth;

    return generatedWidth;
}


function getRandomHeight(duckID,min,max) {
    var generatedHeight = Math.floor(Math.random() * (max - min + 1)) + min;

    if (generatedHeight > previousHeight){
        duckDirections[duckDirections.length-1] += "up";
    } else {
        duckDirections[duckDirections.length-1] += "down";
    }

    // console.log(duckDirections[duckDirections.length-1]);
    previousHeight = generatedHeight;
    
    return generatedHeight;

    
}

function flapWings(){
var duckToRightSideImages = ["../resources/sprites/duck/right1.png", 
                            "../resources/sprites/duck/right2.png",
                            "../resources/sprites/duck/right3.png"]

    setInterval(function(){
        duck1.style.backgroundImage = "none";
        duck1.style.backgroundSize = "100%";
        duck1.style.backgroundImage = "url(" + duckToRightSideImages[i] + ")";
        i = i+1;
        if(i == duckToRightSideImages.length){
            i = 0;
        } 
    }, 330);
}