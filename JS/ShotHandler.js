class ShotHandler{

    constructor(initialAmmo){
        this.initialAmmo = initialAmmo;
        this.ammo = initialAmmo;
    }

    
    getAmmoNumber(){
        return this.ammo;
    }


    resetAmmo(){
        this.ammo = this.initialAmmo;
        this.changeShootBoxImage();
    }


    checkIsNoAmmoLeft(){
        if (this.ammo == 0) {
            return true;
        }
        return false;
    }


    checkIfHitSuccessful(ducks){
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        let numberOfSuccessfulHits = 0;
        this.ammo--;
        this.changeShootBoxImage();

        for (let index = 0; index < ducks.length; index++) {
            let duck = ducks[index];
            let duckPosition = $(duck.duckId).offset();

            if(this.isShotOnDuck(mouseX,mouseY,duckPosition) && duck.isAlive){
                duck.fallDown();
                numberOfSuccessfulHits++;
            }   
        }

        if (numberOfSuccessfulHits>1) {
            showComboMessage(mouseX,mouseY, numberOfSuccessfulHits);
            console.log("combo");
        }

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


    changeShootBoxImage() {
        if (this.ammo<0) {
            var path = `url('../resources/sprites/scoreImages/shot/shot0.png')`;
            document.getElementById("shots").style.backgroundImage = path;
        }else{
            var path = `url('../resources/sprites/scoreImages/shot/shot${this.ammo}.png')`;
            document.getElementById("shots").style.backgroundImage = path;
        }
    }


    enableShooting(){
        $("#shootBlocker").hide();
    }


    disablehooting(){
        $("#shootBlocker").show();
    }
}


