class Duck{

    constructor(id){
        this.duckId = `#${id}`;
        this.wasShot = false;
    }


    startFlight(){
        for (let index = 0; index < 10; index++) {
            this.fly("random");
        }
        this.fly("away");
    }


    fly(direction){
        let destHeight = 100;
        let destWidth = this.getRandomWidth(10,85);
        
        if (direction == "random") {
            destHeight = this.getRandomHeight(35,85);
        } 

        $(this.duckId).animate({bottom: `${destHeight}%`, left: `${destWidth}%`}, 1000 ,function(){})
    }


    // flyOut(){
    //     let destWidth = this.getRandomWidth(10,90);
    //     $(this.duckId).animate({bottom: `100%`, left: `${destWidth}%`}, 1000)
    // }


    getRandomWidth(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    
    getRandomHeight(min,max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;   
    }
}