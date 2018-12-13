class Game{

    constructor(){
        this.dog1 = new Dog("dog1");
        this.dog2 = new Dog("dog2");
        this.ducks = this.createDucks(15);
        this.duck1 = new Duck("duck1");
        this.duck2 = new Duck("duck2");
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
        this.shotHandler.checkIfHitSuccessful(this.duck1, this.duck2);
    }

    startNewRound(){
        this.startDucksFlight();
        this.shotHandler.enableShooting();
    }


    startDucksFlight(){
        this.ducks.forEach(duck => {
            duck.startFlight();
        });

        // this.duck1.startFlight();
        // this.duck2.startFlight();
        // console.log(this.duck1.currentWidth);

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