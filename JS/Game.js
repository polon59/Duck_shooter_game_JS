class Game{

    constructor(numberOfDucks, duckMovesNumber, initialAmmo){
        this.dog1 = new Dog("dog1");
        this.dog2 = new Dog("dog2");
        this.duckMovesNumber = duckMovesNumber;
        this.shotHandler = new ShotHandler(initialAmmo);
        this.ducksHandler = new DucksHandler(numberOfDucks, duckMovesNumber);
    }

    startGame(){
        document.getElementById("startScreen").style.display = "none";
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
        if (this.ducksHandler.checkAllDucksAreShot() || this.checkIsNoAmmoLeft()) {
            this.finishRound();
        }
    }


    finishRound(){
        this.shotHandler.disablehooting();
        this.ducksHandler.removeRemainingDucks();
        this.dog2.showDogWithKilledDucks(this.ducksHandler.ducksKilledInRound);
        setTimeout(() => this.startNewRound(), 2000);
        
    }


    // move to shotHandler
    checkIsNoAmmoLeft(){
        if (this.shotHandler.ammo == 0) {
            return true;
        }
        return false;

    }


    startNewRound(){
        this.ducksHandler.startDucksFlight();
        this.shotHandler.enableShooting();
        this.shotHandler.resetAmmo();
    }


}