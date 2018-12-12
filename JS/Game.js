class Game{

    constructor(){
        this.dog1 = new Dog("dog1");
        this.dog2 = new Dog("dog2");
        this.duck1 = new Duck("duck1");
        this.duck2 = new Duck("duck2");
    }

    startGame(){
        document.getElementById("startScreen").style.display = "none";
        this.dog1.launchWalkoutAnimation();
        setTimeout(() => this.startDucksFlight(), 7300);
    }


    startDucksFlight(){
        this.duck1.startFlight();
        this.duck2.startFlight();

    }


}