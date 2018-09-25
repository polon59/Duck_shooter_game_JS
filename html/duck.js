





function changeAnimation() {
    var style = document.documentElement.appendChild(document.createElement("style")),
    rule = "@keyframes example {\
        0%   {left: " + getRandom("width") + "%; bottom: 20%;}\
        10%  {left:" + getRandom("width") +"%; bottom:" + getRandom("height") + "%;}\
        20%  {left:" + getRandom("width") +"%; bottom:" + getRandom("height") + "%;}\
        30%  {left:" + getRandom("width") +"%; bottom:" + getRandom("height") + "%;}\
        40%  {left:" + getRandom("width") +"%; bottom:" + getRandom("height") + "%;}\
        50%  {left:" + getRandom("width") +"%; bottom:" + getRandom("height") + "%;}\
        60%  {left:" + getRandom("width") +"%; bottom:" + getRandom("height") + "%;}\
        70%  {left:" + getRandom("width") +"%; bottom:" + getRandom("height") + "%;}\
        80%  {left:" + getRandom("width") +"%; bottom:" + getRandom("height") + "%;}\
        90%  {left:" + getRandom("width") +"%; bottom:" + getRandom("height") + "%;}\
        100% {left:" + getRandom("width") +"%; bottom: 100%;}\
    }";
    // if (CSSRule.KEYFRAMES_RULE) {
        style.sheet.insertRule(rule, 0);
    // } else if (CSSRule.WEBKIT_KEYFRAMES_RULE) { // WebKit
    //     style.sheet.insertRule("@-webkit-keyframes" + rule, 0);
    // }
}


function getRandom(valueName) {
    var randomValue = 0;
    if (valueName == "width") {
        randomValue = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
        // return Math.floor(Math.random() * (95 - 5 + 1)) + 5;
    } else {
        randomValue = Math.floor(Math.random() * (80 - 30 + 1)) + 40;
        // return Math.floor(Math.random() * (80 - 40 + 1)) + 20;
    }
    console.log(valueName + "  " + randomValue );
    return randomValue;

    
}


