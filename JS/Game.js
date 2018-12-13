class Game{

    constructor(){
        this.dog1 = new Dog("dog1");
        this.dog2 = new Dog("dog2");
        this.ducks = this.createDucks(3);
        this.shotHandler = new ShotHandler();
    }

    startGame(){
        document.getElementById("startScreen").style.display = "none";
        // this.dog1.launchWalkoutAnimation();
        // setTimeout(() => this.startDucksFlight(), 7300);
        this.startNewRound();
        $("#sky").click(this.shoot.bind(this));
        
    }


    shoot(){
        this.shotHandler.checkIfHitSuccessful(this.ducks);
    }


    startNewRound(){
        this.startDucksFlight();
        this.shotHandler.enableShooting();
    }


    startDucksFlight(){
        this.ducks.forEach(duck => {
            duck.startFlight();
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