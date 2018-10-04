var duckDirections = [];
var duckDirectionsIndex = 0;

var previousWidth = 0;
var previousHeight = 0;

var changeCounter = 0;
var myVar;
var i = 0;

function start() {
    duckDirections = [];
    resetKilledDucksNumber();
    resetMagRounds();
    changeAnimations();
    resetDuck("duck1");
    resetDuck("duck2");
    
}


function changeAnimations() {
    changeDirection("duck1");
    changeDirection("duck2");
}


function flyOut() {
    var duck1 = document.getElementById("duck1");
    var duck2 = document.getElementById("duck2");
    flyOutSingleDuck(duck1, "duck1");
    flyOutSingleDuck(duck2, "duck2");
    var gtfo = setTimeout(start, 500);
}

function flyOutSingleDuck(duck,duckID) {
    var duckCurrentHeight = duck.offsetTop;
    var duckCurrentWidth = duck.offsetLeft;

    var style = document.documentElement.appendChild(document.createElement("style"));

    rule = `@keyframes ${duckID}flyout{
        0%   {left: ${duckCurrentWidth}; top: ${duckCurrentHeight};}
        100% {left: 105%; top: ${duckCurrentHeight};}
    }`;

    style.sheet.insertRule(rule, 0);
    duck.style.animationName = `${duckID}flyout`;
    duck.style.animationDuration = "0.5s";
}



function changeDirection(duckID) {
    var style = document.documentElement.appendChild(document.createElement("style"));
    var rule = createRule(duckID);
    style.sheet.insertRule(rule, 0);

    document.getElementById(duckID).style.animationName = duckID;
    document.getElementById(duckID).style.animationDuration = "10s";
    document.getElementById(duckID).style.animationIterationCount = "infinite";
}


function createRule(duckID) {
    rule = `@keyframes ${duckID}{
        0%   {left: ${getRandomWidth(duckID,30,60)}%; bottom: 20%;}
        10%  {left: ${getRandomWidth(duckID,10,90)}%; bottom: ${getRandomHeight(duckID,35,85)}%;}
        20%  {left: ${getRandomWidth(duckID,10,90)}%; bottom: ${getRandomHeight(duckID,35,85)}%;}
        30%  {left: ${getRandomWidth(duckID,10,90)}%; bottom: ${getRandomHeight(duckID,35,85)}%;}
        40%  {left: ${getRandomWidth(duckID,10,90)}%; bottom: ${getRandomHeight(duckID,35,85)}%;}
        50%  {left: ${getRandomWidth(duckID,10,90)}%; bottom: ${getRandomHeight(duckID,35,85)}%;}
        60%  {left: ${getRandomWidth(duckID,10,90)}%; bottom: ${getRandomHeight(duckID,35,85)}%;}
        70%  {left: ${getRandomWidth(duckID,10,90)}%; bottom: ${getRandomHeight(duckID,35,85)}%;}
        80%  {left: ${getRandomWidth(duckID,10,90)}%; bottom: ${getRandomHeight(duckID,35,85)}%;}
        90%  {left: ${getRandomWidth(duckID,10,90)}%; bottom: ${getRandomHeight(duckID,35,85)}%;}
        100% {left: ${getRandomWidth(duckID,10,90)}%; bottom: ${getRandomHeight(duckID,100,100)}%;}
    }`;
    return rule;
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

    if (duckDirections.length > 3){
        if (heightDifference > 10){
            duckDirections[duckDirections.length-1] += "up";
        }
        else if (heightDifference < -10) {
            duckDirections[duckDirections.length-1] += "down";
        }
    }

    
    previousHeight = generatedHeight;
    
    return generatedHeight;   
}


function falldown(duckID,currentWidth,currentHeight) {
    var style = document.documentElement.appendChild(document.createElement("style"));
    var duck = document.getElementById(duckID);

    rule = `@keyframes ${duckID}fall{
            0%   {left: ${currentWidth} ; top: ${currentHeight};}
            100% {left: ${currentWidth} ; top: 500;}
            }`;


    style.sheet.insertRule(rule, 0);
    duck.style.animationName = `${duckID}fall`;
    duck.style.animationDuration = "1s";
    duck.style.backgroundImage = "url('../resources/sprites/duck/falling.gif')";
    duck.style.animationIterationCount = 1;
}

function resetDuck(duckID){
    var duck = document.getElementById(duckID);
    duck.style.backgroundImage = "url('../resources/sprites/duck/right1.png')";
}