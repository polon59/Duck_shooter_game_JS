class ShotHandler{

    constructor(){
        $("#sky").click(this.shot);
        this.ammo = 3;
    }


    checkIfHitSuccessful(ducks){
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let numberOfHits = 0;
        this.ammo--;

        ducks.forEach(duck => {
            let duckPosition = $(duck.duckId).offset();

            if(this.isShotOnDuck(mouseX,mouseY,duckPosition)){
                duck.fallDown();
                numberOfHits++;
            }   
        });

        //IF COMBO - DISPLAY MESSAGE
        return numberOfHits;
    }


    isShotOnDuck(mouseX,mouseY,duckPosition) {
        let duckX = duckPosition.left;
        let duckY = duckPosition.top;
        let duckWidth = 78;
        let duckHeight = 73;
    
        if ((mouseX>=duckX) && (mouseX <= duckX+duckHeight) && 
            (mouseY >= duckY) && (mouseY <= duckY+duckWidth)){
            return true;
        }
        return false;
    }


    enableShooting(){
        $("#shootBlocker").hide();
    }

    
    
    
}