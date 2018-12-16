class DucksHandler{
    
    constructor(numberOfDucks){
        this.numberOfDucks = numberOfDucks;
        this.ducks = this.createDucks();
        this.ducksKilledInRound = 0;
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


    createDucks(){
        let ducksList = new Array();

        for (let id = 1; id < this.numberOfDucks+1; id++) {
            let currentId = `duck${id}`;
            ducksList.push(new Duck(currentId));
            $("#sky").append(`<div id="${currentId}" class="duck"></div>`);
        }

        return ducksList;
    }
}