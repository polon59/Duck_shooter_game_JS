var animationSpeed = 10;


function changeAnimationSpeed() {
    animationSpeed -= 0.5;
}

function start() {
    playSound("duck");
    enableShooting();
    changeAnimations();
    resetMagRounds();
    resetKilledDucksNumber();
}

function resetDuckImage(duckID){
    var duck = document.getElementById(duckID);
    duck.style.backgroundImage = "url('../resources/sprites/duck/flyingright.gif')";
}


//*** FLY IN RANDOM DIRECTIONS:

function changeAnimations() {
    changeFlyAnimation("duck1");
    changeFlyAnimation("duck2");
    resetDuckImage("duck1");
    resetDuckImage("duck2");
}


function changeFlyAnimation(duckID) {
    var duck = document.getElementById(duckID);
    var style = document.documentElement.appendChild(document.createElement("style"));
    var rule = createRule(duckID);

    style.sheet.insertRule(rule, 0);
    setupFlyAnimation(duck, duckID);
}


function setupFlyAnimation(duck, duckID) {
    duck.style.animationName = duckID;
    duck.style.animationDuration = `${animationSpeed}s`;
    duck.style.animationIterationCount = "infinite";
}


function createRule(duckID) {
    rule = `@keyframes ${duckID}{
        0%   {left: ${getRandomWidth(30,60)}%; bottom: 20%;}
        10%  {left: ${getRandomWidth(10,90)}%; bottom: ${getRandomHeight(35,85)}%;}
        20%  {left: ${getRandomWidth(10,90)}%; bottom: ${getRandomHeight(35,85)}%;}
        30%  {left: ${getRandomWidth(10,90)}%; bottom: ${getRandomHeight(35,85)}%;}
        40%  {left: ${getRandomWidth(10,90)}%; bottom: ${getRandomHeight(35,85)}%;}
        50%  {left: ${getRandomWidth(10,90)}%; bottom: ${getRandomHeight(35,85)}%;}
        60%  {left: ${getRandomWidth(10,90)}%; bottom: ${getRandomHeight(35,85)}%;}
        70%  {left: ${getRandomWidth(10,90)}%; bottom: ${getRandomHeight(35,85)}%;}
        80%  {left: ${getRandomWidth(10,90)}%; bottom: ${getRandomHeight(35,85)}%;}
        90%  {left: ${getRandomWidth(10,90)}%; bottom: ${getRandomHeight(35,85)}%;}
        100% {left: ${getRandomWidth(10,90)}%; bottom: ${getRandomHeight(100,100)}%;}
    }`;
    return rule;
}


function getRandomWidth(min,max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getRandomHeight(min,max) {
    return generatedHeight = Math.floor(Math.random() * (max - min + 1)) + min;   
}



//*** FLY OUT:

function flyOut(duck1, duck2) {

   if (duck1.isAlive) {
        flyOutSingleDuck(duck1);
    }
    if (duck2.isAlive) {
        flyOutSingleDuck(duck2);
    }
}


function flyOutSingleDuck(duck) {
    var duckID = duck.id;
    var duckElement = document.getElementById(duckID);
    var duckCurrentHeight = duckElement.offsetTop;
    var duckCurrentWidth = duckElement.offsetLeft;

    createFlyOutRule(duckID, duckCurrentWidth, duckCurrentHeight)
    setupFlyOutAnimation(duckElement, duckID);
}


function setupFlyOutAnimation(duckElement, duckID) {
    duckElement.style.animationName = `${duckID}flyout`;
    duckElement.style.animationDuration = "0.5s";
    duckElement.style.animationIterationCount = "1";
}


function createFlyOutRule(duckID, duckCurrentWidth, duckCurrentHeight) {
    var style = document.documentElement.appendChild(document.createElement("style"));

    rule = `@keyframes ${duckID}flyout{
        0%   {left: ${duckCurrentWidth}; top: ${duckCurrentHeight};}
        100% {left: ${duckCurrentWidth}; top: 0%;}
    }`;

    style.sheet.insertRule(rule, 0);
}



//*** FALL DOWN:

function falldown(duckID,currentWidth,currentHeight) {
    var duck = document.getElementById(duckID);

    createFalldownRule(duckID, currentWidth, currentHeight);
    setupFallDownAnimation(duck, duckID);
}


function setupFallDownAnimation(duck, duckID){
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


