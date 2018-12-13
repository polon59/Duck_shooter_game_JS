class Duck{

    constructor(id){
        this.duckId = `#${id}`;
        this.isAlive = true;
        this.moveCount = 0;
        this.duckFlight;
        this.currentWidth = 48;
        this.currentHeight = 20;
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

        this.changeDuckBackground(destWidth, destHeight);
        
        $(this.duckId).animate({bottom: `${destHeight}%`, left: `${destWidth}%`}, 1000 ,function(){})
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