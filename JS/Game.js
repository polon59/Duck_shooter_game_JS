class Game{

    constructor(gameParameters){
        this.dog1 = new Dog("dog1");
        this.dog2 = new Dog("dog2");
        this.duckMovesNumber = gameParameters.movesNumber;
        this.shotHandler = new ShotHandler(gameParameters.initialAmmo);
        this.pointsHandler = new PointsHandler();
        this.ducksHandler = new DucksHandler(gameParameters.ducksNumber, gameParameters.movesNumber);
        this.roundEndCountdown;
        this.lives = 3;
    }

    startGame(){
        this.dog1.launchWalkoutAnimation();
        setTimeout(() => this.startNewRound(), 7300);
    }

    shoot(){
        console.log(this.shotHandler.ammo);
        let successfulHits = this.shotHandler.checkIfHitSuccessful(this.ducksHandler.ducks);
        this.ducksHandler.ducksKilledInRound += successfulHits;
        // this.checkIfRoundIsPassed(successfulHits);
        this.checkIfRoundIsFinished();
    }

    // checkIfRoundIsPassed(successfulHits){
    //     if successfulHits
    // }

    checkIfRoundIsFinished(){
        if (this.ducksHandler.checkAllDucksAreShot() || this.shotHandler.checkIsNoAmmoLeft()) {
            this.finishRound();
        }
    }

    levelUp(){
        this.stopCountdownToRoundEnd();
        this.shotHandler.disablehooting();
        this.ducksHandler.removeRemainingDucks();
        //show new level message
        // this.dog2.showDogWithKilledDucks(this.ducksHandler.ducksKilledInRound);
        setTimeout(() => this.startNewRound(), 2000);
    }

    finishRound(){
        this.stopCountdownToRoundEnd();
        this.shotHandler.disablehooting();
        this.ducksHandler.removeRemainingDucks();
        this.dog2.showDogWithKilledDucks(this.ducksHandler.ducksKilledInRound);
        setTimeout(() => this.startNewRound(), 2000);
    }

    startNewRound(){
        this.setCountdownToRoundEnd();
        this.ducksHandler.startDucksFlight();
        this.shotHandler.enableShooting();
        this.shotHandler.resetAmmo();
    }

    stopCountdownToRoundEnd(){
        window.clearTimeout(this.roundEndCountdown);
    }

    setCountdownToRoundEnd(){
        let timeToRoundEnd = this.duckMovesNumber*1000;
        this.roundEndCountdown = setTimeout(() => this.finishRound(), timeToRoundEnd);
    }
}





class Extreme extends Game{

    constructor(gameParameters){
        super(gameParameters);
        this.initializeCurrentModeSettings();
        this.shooting;
        this.mouseX;
        this.mouseY;
    }

    initializeCurrentModeSettings(){
        $(".sky").css("backgroundImage", "url(../resources/sprites/background/sky3.png)");
        $(".sky").mousedown(()=>this.startAutoShooting(event));
        $(".sky").mouseup(()=>this.stopAutoShooting(event));
    }

    saveCurrentCoordinates(){
        this.mouseX = event.clientX;
        this.mouseY = event.clientY;
    }

    startAutoShooting(event){
        $(".sky").on("mousemove", ()=>this.saveCurrentCoordinates());
        this.shooting = setInterval(()=>this.shoot(),100);
    }

    stopAutoShooting(){
        $(document).off("mousemove");
        clearInterval(this.shooting);
    }

    shoot(){
        let successfulHits = this.shotHandler.checkIfHitSuccessful(this.ducksHandler.ducks, this.mouseX, this.mouseY);
        this.ducksHandler.ducksKilledInRound += successfulHits;
        this.pointsHandler.addPoints(successfulHits);
        this.checkIfRoundIsFinished();
    }


    finishRound(){
        this.stopAutoShooting();
        this.stopCountdownToRoundEnd();
        this.shotHandler.disablehooting();
        this.ducksHandler.removeRemainingDucks();
        this.dog2.showDogWithKilledDucks(this.ducksHandler.ducksKilledInRound);
        setTimeout(() => this.startNewRound(), 2000);
        this.addNewDuck();
        
    }

    addNewDuck(){
        if (this.ducksHandler.numberOfDucks < 20) {
            this.ducksHandler.createNewDuck();
        }
    }
}



class Modern extends Game{
    
    constructor(gameParameters){
        super(gameParameters);
        this.changeBackgroudsForCurrentMode();
    }

    changeBackgroudsForCurrentMode(){
        $(".sky").css("backgroundImage", "url(../resources/sprites/background/sky2.png)");
        $("#sky").click(this.shoot.bind(this));
    }

}


class Classic extends Game{
    constructor(gameParameters){
        super(gameParameters);
        this.changeBackgroudsForCurrentMode();
    }

    changeBackgroudsForCurrentMode(){
        $(".sky").css("backgroundImage", "url(../resources/sprites/background/sky1.png)");
        $("#sky").click(this.shoot.bind(this));
    }
}