class ShotHandler{

    constructor(){
        $("#sky").click(this.shot);
    }


    shot(){
        alert("BANG");
    }

    enableShooting(){
        $("#shootBlocker").hide();
    }
}