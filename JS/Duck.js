class Duck{

    constructor(id, duckMovesNumber){
        this.duckMovesNumber = duckMovesNumber;
        this.duckId = `#${id}`;
        this.isAlive = true;
        this.moveCount = 0;
        this.duckFlight;
        this.currentWidth = 48;
        this.currentHeight = 20;
    }


    startFlight(){
        this.resurrect();
        this.duckFlight = setInterval(() => this.fly(), 1000);
    }


    resurrect(){
        this.isAlive = true;
        this.moveCount = 0;
        this.currentWidth = 48;
        this.currentHeight = 20;
        this.moveToInitialPosition();
    }


    stopFlightAnimation(){
        clearInterval(this.duckFlight);
        $(this.duckId).stop(true);
    }


    moveToInitialPosition(){
        $(this.duckId).css("bottom", "20%");
    }


    flyOut(){
        this.stopFlightAnimation();
        let destWidth = this.getRandomWidth(10,85);
        this.changeDuckBackground(destWidth, 100);
        $(this.duckId).animate({bottom: `100%`, left: `${destWidth}%`}, 500 ,function(){})
    }


    fallDown(){
            this.isAlive = false;
            let this_ = this;
            this.stopFlightAnimation();
            $(this.duckId).css("background-image", "url(../resources/sprites/duck/hit.png)")

            setTimeout(function(){
                $(this_.duckId)
                    .css("background-image", "url(../resources/sprites/duck/falling.gif)")
                    .animate({bottom: `10%`,}, 650);
            },150);
    }
    

    fly(){
        this.moveCount++;
        let destWidth = this.getRandomWidth(10,85);
        let destHeight = this.getRandomHeight(35,85);
        this.changeDuckBackground(destWidth, destHeight);
        $(this.duckId).animate({bottom: `${destHeight}%`, left: `${destWidth}%`}, 1000)
        this.currentWidth = destWidth;
        this.currentHeight = destHeight;
    }


    changeDuckBackground(destWidth, destHeight){
        if (destWidth > this.currentWidth) {
            $(this.duckId)
            .css("background-image", "url(../resources/sprites/duck/flyright.gif)");
            if(destHeight - this.currentHeight > 20){
                $(this.duckId)
                .css("background-image", "url(../resources/sprites/duck/flyrightup.gif)");}
            if(destHeight - this.currentHeight < -20){
                $(this.duckId)
                .css("background-image", "url(../resources/sprites/duck/flyrightdown.gif)");
            
            }
        } else {
            $(this.duckId)
            .css("background-image", "url(../resources/sprites/duck/flyleft.gif)");

            if(destHeight - this.currentHeight > 20){
                $(this.duckId)
                .css("background-image", "url(../resources/sprites/duck/flyleftup.gif)");}
            if(destHeight - this.currentHeight < -20){
                $(this.duckId)
                .css("background-image", "url(../resources/sprites/duck/flyleftdown.gif)");
            }
        }
    }


    getRandomWidth(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
    getRandomHeight(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;   
    }
}