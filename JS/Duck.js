class Duck{

    constructor(id){
        this.duckId = `#${id}`;
        this.wasShot = false;
        this.moveCount = 0;
        this.duckFlight;
    }


    startFlight(){
        this.duckFlight = setInterval(() => this.fly("random"), 1000);

        // this.fly("away");
    }



    fallDown(){
        clearInterval(this.duckFlight);
        $(this.duckId).stop()
        .css("background-image", "url(../resources/sprites/duck/falling.gif)")
        .animate({bottom: `10%`,}, 500 ,function(){});
    }


    fly(direction){
        if (this.moveCount == 10) {
            clearInterval(this.duckFlight);
            direction = "top";
        }

        this.moveCount++;

        let destHeight = 100;
        let destWidth = this.getRandomWidth(10,85);

        if (direction == "random") {
            destHeight = this.getRandomHeight(35,85);
        } 

        $(this.duckId).animate({bottom: `${destHeight}%`, left: `${destWidth}%`}, 1000 ,function(){})
    }


    getRandomWidth(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
    getRandomHeight(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;   
    }
}