class Duck{

    constructor(id){
        this.duckId = `#${id}`;
        this.isAlive = true;
        this.moveCount = 0;
        this.duckFlight;
        this.currentWidth = 48;
    }


    startFlight(){
        this.duckFlight = setInterval(() => this.fly(), 1000);
    }


    fallDown(){
        if (this.isAlive) {
            clearInterval(this.duckFlight);
            $(this.duckId).stop()
            .css("background-image", "url(../resources/sprites/duck/falling.gif)")
            .animate({bottom: `10%`,}, 500 ,function(){});
        }
    }


    fly(){
        let destWidth = this.getRandomWidth(10,85);
        let destHeight = this.getRandomHeight(35,85);
        this.moveCount++;

        if (this.moveCount == 10) {
            clearInterval(this.duckFlight);
            destHeight = 100;
        }

        this.changeDuckBackground(destWidth);
        
        $(this.duckId).animate({bottom: `${destHeight}%`, left: `${destWidth}%`}, 1000 ,function(){})
        this.currentWidth = destWidth;
    }


    changeDuckBackground(destWidth){
        if (destWidth > this.currentWidth) {
            console.log("PRAWO " + this.currentWidth + "..." + destWidth);
            $(this.duckId)
            .css("background-image", "url(../resources/sprites/duck/flyright.gif)");
        } else {
            console.log("LEWO " + this.currentWidth + "..." + destWidth);
            $(this.duckId)
            .css("background-image", "url(../resources/sprites/duck/flyleft.gif)");
        }
    }


    getRandomWidth(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
    getRandomHeight(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;   
    }
}