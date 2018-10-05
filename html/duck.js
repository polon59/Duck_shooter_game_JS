
function start() {
    changeAnimations();
    resetMagRounds();
    resetKilledDucksNumber();
}


function changeAnimations() {
    changeFlyAnimation("duck1");
    changeFlyAnimation("duck2");
    resetDuckImage("duck1");
    resetDuckImage("duck2");
}


function flyOut(duck1, duck2) {

   if (duck1.isAlive) {
        flyOutSingleDuck(duck1);
        console.log("Duck 1 is alive");
    }
    if (duck2.isAlive) {
        flyOutSingleDuck(duck2);
        console.log("Duck 2 is alive");
    }
}


function flyOutSingleDuck(duck) {
    var duckID = duck.id;
    var duckElement = document.getElementById(duckID);

    var duckCurrentHeight = duckElement.offsetTop;
    var duckCurrentWidth = duckElement.offsetLeft;

    createFlyOutRule(duckID, duckCurrentWidth, duckCurrentHeight)
    duckElement.style.animationName = `${duckID}flyout`;
    duckElement.style.animationDuration = "0.5s";
}


function createFlyOutRule(duckID, duckCurrentWidth, duckCurrentHeight) {
    var style = document.documentElement.appendChild(document.createElement("style"));

    rule = `@keyframes ${duckID}flyout{
        0%   {left: ${duckCurrentWidth}; top: ${duckCurrentHeight};}
        100% {left: ${duckCurrentWidth}; top: 0%;}
    }`;

    style.sheet.insertRule(rule, 0);
}



function changeFlyAnimation(duckID) {
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
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomHeight(duckID,min,max) {
    return generatedHeight = Math.floor(Math.random() * (max - min + 1)) + min;   
}


function falldown(duckID,currentWidth,currentHeight) {
    var duck = document.getElementById(duckID);

    createFalldownRule(duckID, currentWidth, currentHeight) 
    duck.style.animationName = `${duckID}fall`;
    duck.style.animationDuration = "0.5s";
    duck.style.backgroundImage = "url('../resources/sprites/duck/falling.gif')";
    duck.style.animationIterationCount = 1;
}


function createFalldownRule(duckID, currentWidth, currentHeight) {
    var style = document.documentElement.appendChild(document.createElement("style"));

    rule = `@keyframes ${duckID}fall{
        0%   {left: ${currentWidth} ; top: ${currentHeight};}
        100% {left: ${currentWidth} ; top: 500;}
        }`;

    style.sheet.insertRule(rule, 0);
}


function resetDuckImage(duckID){
    var duck = document.getElementById(duckID);
    duck.style.backgroundImage = "url('../resources/sprites/duck/right1.png')";
}