class PointsHandler{

    constructor(){
        this.pointsNumber = 0;
        this.level = 0;
    }


    addPoints(ammount){
        this.pointsNumber += ammount;
        this.displayUpdatedPointsNumber();
    }


    displayUpdatedPointsNumber(){
        $("#scoreCount").html(this.pointsNumber);
    }
}