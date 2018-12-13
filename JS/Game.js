class Game{

    constructor(){
        this.dog1 = new Dog("dog1");
        this.dog2 = new Dog("dog2");
        this.duck1 = new Duck("duck1");
        this.duck2 = new Duck("duck2");
    }

    startGame(){
        document.getElementById("startScreen").style.display = "none";
        // this.dog1.launchWalkoutAnimation();
        // setTimeout(() => this.startDucksFlight(), 7300);

        this.startDucksFlight();
        document.onkeydown = this.checkKey.bind(this);
    }


    startDucksFlight(){
        this.duck1.startFlight();
        this.duck2.startFlight();

    }


    checkKey(e){

        e = e || window.event;
        let pressedKeyCode = e.keyCode;

        console.log("STOP");
        
        if (pressedKeyCode === 13) {
            this.duck1.fallDown();
            this.duck2.fallDown();
        } 
    }


}