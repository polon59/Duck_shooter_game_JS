class Duck{

    constructor(id){
        this.duckId = `#${id}`;
        this.wasShot = false;
    }


    startFlight(){
        alert(this.duckId +" latajet")
    }
}