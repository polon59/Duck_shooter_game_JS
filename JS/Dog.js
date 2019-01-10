class Dog{

    constructor(id){
        this.dogId = `#${id}`;
    }

    launchWalkoutAnimation(){
        let walkBackground = "url(../resources/sprites/dog/dogeWalking.gif)";
        let sniffBackground = "url(../resources/sprites/dog/snif.gif)";
        let stopBackground = "url(../resources/sprites/dog/found.png)";
        let jumpBackground = "url(../resources/sprites/dog/pawelJumper.gif)";

        $(this.dogId)
        .animate({left: "20%",}, 2000 ,function(){
            $(this).css("background-image", sniffBackground)
        })
        .animate({left: "20%",}, 1000 ,function(){
            $(this).css("background-image", walkBackground);
        })
        .animate({left: "40%",}, 2000 ,function(){
            $(this).css("background-image", sniffBackground);
        })
        .animate({left: "40%",}, 1000 ,function(){
            $(this).css("background-image", stopBackground);
        })
        .animate({left: "40%",}, 500 ,function(){
            $(this).css("background-image", jumpBackground)
            .css("animation-name", "dogJump")
        })
        .animate({opacity: "40%",}, 700 ,function(){
            $(this).css("display", "none");
        })
    }


    showDogWithKilledDucks(killedDucks) {
    
        if (killedDucks == 0) {
            $(this.dogId).css("backgroundImage" ,'url(../resources/sprites/dog/bk.gif)');
        } else if(killedDucks == 1) {
            $(this.dogId).css("backgroundImage" ,'url(../resources/sprites/dog/gotOne.png)');
        } else{
            $(this.dogId).css("backgroundImage" ,'url(../resources/sprites/dog/gotTwo.png)');
        }

        $(this.dogId)
        .animate({bottom: "35%",}, 600 ,function(){
        })
        // change to wait
        .animate({bottom: "35%",}, 800 ,function(){
        })
        .animate({bottom: "15%",}, 600 ,function(){
        })
    }
}