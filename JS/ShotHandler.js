class ShotHandler{

    constructor(game_){
        debugger
        $("#sky").click(this.shot);
        this.game = game_;
    }


    shot(){
        alert("BANG");
        this.game.duck1.fallDown();
    }

    enableShooting(){
        $("#shootBlocker").hide();
    }
}