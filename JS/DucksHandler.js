class DucksHandler{
    
    constructor(numberOfDucks, duckMovesNumber){
        this.duckMovesNumber = duckMovesNumber;
        this.initialDucksNumber = numberOfDucks;
        this.numberOfDucks = 0;
        this.ducks = new Array();
        this.ducksKilledInRound = 0;
        this.createDucks();
    }

    startDucksFlight(){
        this.ducksKilledInRound = 0;
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

    checkAllDucksAreShot(){
        if (this.ducksKilledInRound == this.numberOfDucks) {
            return true;
        }
        return false;
    }

    countPrecentOfDucksKilled(){
        let percent = Math.round(this.ducksKilledInRound/this.numberOfDucks*100);
        return percent;
    }

    createNewDuck(){
        this.numberOfDucks ++;
        let id = this.ducks.length;
        this.ducks.push(new Duck(id, this.duckMovesNumber));
        $("#sky").append(`<div id="${id}" class="duck"></div>`);
    }

    createDucks(){
        for (let i = 0; i < this.initialDucksNumber; i++) {
            this.createNewDuck();
        }
    }
}