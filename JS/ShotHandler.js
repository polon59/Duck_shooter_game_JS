class ShotHandler{

    constructor(){
        $("#sky").click(this.shot);
        this.ammo = 3;
    }

    
    getAmmoNumber(){
        return this.ammo;
    }

    resetAmmo(){
        this.ammo = 3;
    }


    checkIfHitSuccessful(ducks){
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let numberOfSuccessfulHits = 0;
        this.ammo--;

        for (let index = 0; index < ducks.length; index++) {
            let duck = ducks[index];
            let duckPosition = $(duck.duckId).offset();

            if(this.isShotOnDuck(mouseX,mouseY,duckPosition) && duck.isAlive){
                duck.fallDown();
                numberOfSuccessfulHits++;
                // return here if one hit = one shot
            }   
        }

        //IF COMBO - DISPLAY MESSAGE
        return numberOfSuccessfulHits;
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