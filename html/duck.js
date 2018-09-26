var style;
var duckDirections = [];
var duckDirectionsIndex = 0;


var previousWidth = 0;
var previousHeight = 0;

var flyRight, flyLeft, flyRightUp, flyRightDown, flyLeftUp, flyLeftDown;

var changeCounter = 0;
var duck1 = document.getElementById("duck1");
var myVar;
var i = 0;

function start() {
    clearInterval(myVar);
    duckDirections = [];
      
    changeAnimations();
    myVar = setInterval(changeDucksImages, 2000);
    myVar = setTimeout(changeDucksImages(duckDirections), 10); 
    //var myVar = setInterval(changeDucksImages, 2000);
    //changeAnimations();
    //jednocześnie changeDucksImages(duckDirections) co każda zmiana
    // var myVar = setInterval(changeDucksImages, 2000);
    //  var myVar = setTimeout(changeDucksImages(duckDirections), 10);   
}

// function removeIntervalImgChange(params) {
//     if (myVar != 0) {
//         clearInterval(myVar);
//     }
// }

    function changeDucksImages() {
        if(duckDirections.length > 3){
            //console.log(duckDirections);
            if(duckDirections[duckDirectionsIndex] == "right"){
                flapWingsToRight();
                //console.log("right");
            }else if(duckDirections[duckDirectionsIndex]  == "left"){
                flapWingsToLeft();
                //console.log("lenft");
            }else if(duckDirections[duckDirectionsIndex]  == "rightup"){
                flapWingsToRightUp();
                //console.log("ru");
            }else if(duckDirections[duckDirectionsIndex]  == "leftup"){
                flapWingsToLeftUp();
                //console.log("lu");
            }else if(duckDirections[duckDirectionsIndex]  == "rightdown"){
                flapWingsToRightDown();
                //console.log("rd");
            }else{flapWingsToLeftDown(); 
                //console.log("BURDEL");
            
            }
            duckDirectionsIndex++;
            if(duckDirectionsIndex == duckDirections.length+2){
                duckDirectionsIndex = 0;
            }
        }
       // console.log(duckDirectionsIndex);
    }

function changeAnimations() {
    changeDirection("duck1");
    changeDucksImages();
    duckDirections = [];
    //changeCounter ++;
}



function changeDirection(duckID) {
    style = document.documentElement.appendChild(document.createElement("style"));
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
    // if (CSSRule.KEYFRAMES_RULE) {p
        style.sheet.insertRule(rule, 0);
    // } else if (CSSRule.WEBKIT_KEYFRAMES_RULE) { // WebKit
    //     style.sheet.insertRule("@-webkit-keyframes" + rule, 0);
    // }
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

function flapWingsToRight(){
 
    // clearInterval(flyLeft); 
    // clearInterval(flyRightUp);  
    // clearInterval(flyRightDown);  
    // clearInterval(flyLeftUp);
    // clearInterval(flyLeftDown);
    var duckToRightSideImages = ["../resources/sprites/duck/right1.png", 
                                 "../resources/sprites/duck/right2.png",
                                 "../resources/sprites/duck/right3.png"]

    flyRight = setInterval(function(){
        duck1.style.backgroundImage = "none";
        duck1.style.backgroundSize = "100%";
        duck1.style.backgroundImage = "url(" + duckToRightSideImages[i] + ")";
        i = i+1;
        if(i == duckToRightSideImages.length){
            i = 0;
        } 
    }, 330);
}

function flapWingsToLeft(){

    // clearInterval(flyRight); 
    // clearInterval(flyRightUp);  
    // clearInterval(flyRightDown);  
    // clearInterval(flyLeftUp);
    // clearInterval(flyLeftDown);
    var duckToLeftSideImages = ["../resources/sprites/duck/left1.png", 
                                "../resources/sprites/duck/left2.png",
                                "../resources/sprites/duck/left3.png"]

    flyLeft = setInterval(function(){
        duck1.style.backgroundImage = "none";
        duck1.style.backgroundSize = "100%";
        duck1.style.backgroundImage = "url(" + duckToLeftSideImages[i] + ")";
        i = i+1;
        if(i == duckToLeftSideImages.length){
            i = 0;
        } 
    }, 330);
}

function flapWingsToRightUp(){

    // clearInterval(flyRight); 
    // clearInterval(flyLeft);   
    // clearInterval(flyRightDown);  
    // clearInterval(flyLeftUp);
    // clearInterval(flyLeftDown);
    var duckToRightUpSideImages = ["../resources/sprites/duck/rightup1.png", 
                                    "../resources/sprites/duck/rightup2.png",
                                    "../resources/sprites/duck/rightup3.png"]

    flyRightUp = setInterval(function(){
        duck1.style.backgroundImage = "none";
        duck1.style.backgroundSize = "100%";
        duck1.style.backgroundImage = "url(" + duckToRightUpSideImages[i] + ")";
        i = i+1;
        if(i == duckToRightUpSideImages.length){
            i = 0;
        } 
    }, 330);
}

function flapWingsToLeftUp(){

    // clearInterval(flyRight); 
    // clearInterval(flyLeft); 
    // clearInterval(flyRightUp);  
    // clearInterval(flyLeftDown);
    var duckToLeftUpSideImages = ["../resources/sprites/duck/leftup1.png", 
                                  "../resources/sprites/duck/leftup2.png",
                                  "../resources/sprites/duck/leftup3.png"]

    flyLeftUp = setInterval(function(){
        duck1.style.backgroundImage = "none";
        duck1.style.backgroundSize = "100%";
        duck1.style.backgroundImage = "url(" + duckToLeftUpSideImages[i] + ")";
        i = i+1;
        if(i == duckToLeftUpSideImages.length){
            i = 0;
        } 
    }, 330);
}

function flapWingsToRightDown(){

    // clearInterval(flyRight); 
    // clearInterval(flyLeft); 
    // clearInterval(flyRightUp);    
    // clearInterval(flyLeftUp)
    // clearInterval(flyLeftDown);
    var duckToRightDownSideImages = ["../resources/sprites/duck/rightdown1.png", 
                                    "../resources/sprites/duck/rightdown2.png",
                                    "../resources/sprites/duck/rightdown3.png"]

    flyRightDown = setInterval(function(){
        duck1.style.backgroundImage = "none";
        duck1.style.backgroundSize = "100%";
        duck1.style.backgroundImage = "url(" + duckToRightDownSideImages[i] + ")";
        i = i+1;
        if(i == duckToRightDownSideImages.length){
            i = 0;
        } 
    }, 330);

}

function flapWingsToLeftDown(){

    // clearInterval(flyRight); 
    // clearInterval(flyLeft); 
    // clearInterval(flyRightUp);  
    // clearInterval(flyRightDown);  
    // clearInterval(flyLeftUp);

    var duckToLeftDownSideImages = ["../resources/sprites/duck/leftdown1.png", 
                                    "../resources/sprites/duck/leftdown2.png",
                                    "../resources/sprites/duck/leftdown3.png"]

    flyLeftDown = setInterval(function(){
        duck1.style.backgroundImage = "none";
        duck1.style.backgroundSize = "100%";
        duck1.style.backgroundImage = "url(" + duckToLeftDownSideImages[i] + ")";
        i = i+1;
        if(i == duckToLeftDownSideImages.length){
            i = 0;
        } 
    }, 330);
}

