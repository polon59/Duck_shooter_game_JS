var duck1 = document.getElementById("duck1");
var duck2 = document.getElementById("duck2");
var audio = new Audio('../resources/sounds/shoot.wav');


function dupa(params) {
    audio.pause();
    audio.currentTime = 0;
    showCoords(event);
    audio.play();
}


function showCoords(event) {
    // width: 78px;
    // height: 73px;

    var x = event.clientX;
    var y = event.clientY;
    var duck1x = duck1.offsetLeft;
    var duck1y = duck1.offsetTop;
    var duck2x = duck2.offsetLeft;
    var duck2y = duck2.offsetTop;

    console.log("x: " + x + "     y: " + y);
    console.log("DUCK x: " + duck1x + "," + (duck1x + 78) +  "    DUCK y: " + duck1y + "," + (duck1y+73));
    
    if ((x>=duck1x) && (x <= duck1x+73) && (y >= duck1y) && (y <= duck1y+78)) {
        // alert("DUCK1!");
        duck1.click();
    }
    else if((x>=duck2x) && (x <= duck2x+73) && (y >= duck2y) && (y <= duck2y+78)){
        // alert("DUCK2!");
        duck2.click();
    }
    else{
        // alert("dupa");
    }

}