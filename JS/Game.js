class Game{

    constructor(numberOfDucks, duckMovesNumber, initialAmmo){
        this.dog1 = new Dog("dog1");
        this.dog2 = new Dog("dog2");
        this.duckMovesNumber = duckMovesNumber;
        this.shotHandler = new ShotHandler(initialAmmo);
        this.ducksHandler = new DucksHandler(numberOfDucks, duckMovesNumber);
        this.roundEndCountdown;
    }

    startGame(){
        // document.getElementById("startScreen").style.display = "none";
        this.dog1.launchWalkoutAnimation();
        setTimeout(() => this.startNewRound(), 7300);
        // this.startNewRound();
        $("#sky").click(this.shoot.bind(this));
    }


    shoot(){
        let successfulHits = this.shotHandler.checkIfHitSuccessful(this.ducksHandler.ducks);
        this.ducksHandler.ducksKilledInRound += successfulHits;
        this.checkIfRoundIsFinished();

    }


    checkIfRoundIsFinished(){
        if (this.ducksHandler.checkAllDucksAreShot() || this.shotHandler.checkIsNoAmmoLeft()) {
            this.finishRound();
        }
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