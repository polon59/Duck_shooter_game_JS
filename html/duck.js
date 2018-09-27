var duckDirections = [];
var duckDirectionsIndex = 0;

var previousWidth = 0;
var previousHeight = 0;

var changeCounter = 0;
var myVar;
var i = 0;

function start() {
    // clearInterval(myVar);
    duckDirections = [];
    resetKilledDucksNumber();
    changeAnimations();
    resetDuck("duck1");
    resetDuck("duck2");
    // myVar = setInterval(changeDucksImages, 2000);
}


function changeAnimations() {
    changeDirection("duck1");
    changeDirection("duck2");
}


function flyOut(duckID) {
    var duck = document.getElementById(duckID);
    var duckCurrentHeight = duck1.offsetTop;
    var duckCurrentWidth = duck2.offsetLeft;

    var style = document.documentElement.appendChild(document.createElement("style"));

    rule = "@keyframes " + duckID + "{\
        0%   {left: " + duckCurrentWidth + "%; top:" + duckCurrentHeight + ";}\
        100% {left:" + 0 +"%; top:" + duckCurrentHeight + "%;}\
    }";
    style.sheet.insertRule(rule, 0);

}



function changeDirection(duckID) {
    var style = document.documentElement.appendChild(document.createElement("style"));
    rule = "@keyframes " + duckID + "{\
        0%   {left: " + getRandomWidth(duckID,30,60) + "%; bottom:" + 20 + "%;}\
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
    style.sheet.insertRule(rule, 0);
    document.getElementById(duckID).style.animationName = duckID;
    document.getElementById(duckID).style.animationDuration = "20s";

}

function getRandomWidth(duckID,min,max) {
    var generatedWidth = Math.floor(Math.random() * (max - min + 1)) + min;;
    //var widthDifference = generatedWidth - previousWidth;


    if (generatedWidth < previousWidth){
        duckDirections.push("left");
    }else{
        duckDirections.push("right");
    }
    previousWidth = generatedWidth;
    return generatedWidth;
}



function getRandomHeight(duckID,min,max) {
    var generatedHeight = Math.floor(Math.random() * (max - min + 1)) + min;
    var heightDifference = generatedHeight - previousHeight;
    if(duckDirections.length > 3){
    if (heightDifference > 10){
        duckDirections[duckDirections.length-1] += "up";
        //console.log(duckDirections);
    } else if (heightDifference < -10) {
        duckDirections[duckDirections.length-1] += "down";
    }}

    console.log(duckDirections[duckDirections.length-1]);
    
    previousHeight = generatedHeight;
    
    return generatedHeight;   
}


function falldown(duckID,currentWidth,currentHeight) {
    var style = document.documentElement.appendChild(document.createElement("style"));
    var duck = document.getElementById(duckID);
    

    rule = "@keyframes " + duckID + "fall{\
        0%   {left: " + (currentWidth) + "; top:" + currentHeight + ";}\
        100% {left:" + (currentWidth) +"; top:" + 500 + ";}\
    }";

    style.sheet.insertRule(rule, 0);
    duck.style.animationName = duckID + "fall";
    duck.style.animationDuration = "1s";
    duck.style.backgroundImage = "url('../resources/sprites/duck/falling.gif')";
    // duck.style.backgroundImage = "url('../resources/sprites/duck/fallingleft.png');";
    duck.style.animationIterationCount = 1;
}

function resetDuck(duckID){
   // var style = document.documentElement.appendChild(document.createElement("style"));
    var duck = document.getElementById(duckID);
    duck.style.backgroundImage = "url('../resources/sprites/duck/right1.png')";
}