class ShotHandler{

    constructor(){
        $("#sky").click(this.shot);
    }

    checkIfHitSuccessful(duck1, duck2){
        duck1.fallDown();
        duck2.fallDown();
    }

    enableShooting(){
        $("#shootBlocker").hide();
    }


    // subtractShoots() {
    //     var mouseX = event.clientX;
    //     var mouseY = event.clientY;
    //     var duck1x = duck1element.offsetLeft;
    //     var duck1y = duck1element.offsetTop;
    //     var duck2x = duck2element.offsetLeft;
    //     var duck2y = duck2element.offsetTop;
    
    //     if (checkIfHit(mouseX,mouseY,duck1x,duck1y)) {
    //         duck1.isAlive = false;
    //         falldown("duck1",duck1x,duck1y); 
    //     }
    //     else if(checkIfHit(mouseX,mouseY,duck2x,duck2y)){
    //         duck2.isAlive = false;
    //         falldown("duck2",duck2x,duck2y);
    //     }
    //     else{
    //         playSound("miss");
    //         changeHitBoxImage("miss");
    //     }
    // }
    
    
    // checkIfHit(mouseX,mouseY,duckX,duckY) {
    //     let duckWidth = 78;
    //     let duckHeight = 73;
    
    //     if ((mouseX>=duckX) && (mouseX <= duckX+duckHeight) && 
    //     (mouseY >= duckY) && (mouseY <= duckY+duckWidth)){
    //         changeHitBoxImage("hit");        
    //         playSound("hit");
    //         killedDucks++;
    //         addPoints();
    //         return true;
    //     }
    //     else{
    //         return false;
    //     }
    // }
}