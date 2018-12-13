class Game{

    constructor(numberOfDucks){
        this.dog1 = new Dog("dog1");
        this.dog2 = new Dog("dog2");
        this.ducksKilledInRound = 0;
        this.shotHandler = new ShotHandler();
        this.numberOfDucks = numberOfDucks;
        this.ducks = this.createDucks(numberOfDucks);
    }

    startGame(){
        document.getElementById("startScreen").style.display = "none";
        // this.dog1.launchWalkoutAnimation();
        // setTimeout(() => this.startDucksFlight(), 7300);
        this.startNewRound();
        $("#sky").click(this.shoot.bind(this));
        
    }


    shoot(){
        let successfulHits = this.shotHandler.checkIfHitSuccessful(this.ducks);
        this.ducksKilledInRound += successfulHits;
        this.checkIfRoundIsFinished();

    }


    checkIfRoundIsFinished(){
        if (this.ducksKilledInRound == this.numberOfDucks || this.shotHandler.ammo == 0) {
            this.finishRound();
        }
    }


    finishRound(){
        this.removeRemainingDucks();
        this.dog2.showDogWithKilledDucks(this.ducksKilledInRound);
        
    }


    startNewRound(){
        this.ducksKilledInRound = 0;
        this.startDucksFlight();
        this.shotHandler.enableShooting();
    }


    startDucksFlight(){
        this.ducks.forEach(duck => {
            duck.startFlight();
        });
    }


    removeRemainingDucks(){
        this.ducks.forEach(duck => {
            if (duck.isAlive) {
                duck.flyOut();
            }
        });
    }


    createDucks(numberOfDucks){
        let ducksList = new Array();

        for (let id = 1; id < numberOfDucks+1; id++) {
            let currentId = `duck${id}`;
            ducksList.push(new Duck(currentId));
            $("#sky").append(`<div id="${currentId}" class="duck"></div>`);
        }

        return ducksList;
    }


}