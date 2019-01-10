class PointsHandler{

    constructor(){
        this.pointsNumber = 0;
        this.level = 0;
    }


    addPoints(successfulHits){
        if (successfulHits == 1) {
            this.pointsNumber += 10;
            this.displayUpdatedPointsNumber();
        }
        else if (successfulHits > 1){
            this.pointsNumber += 20 * successfulHits;
            this.displayUpdatedPointsNumber();
        }
    }


    displayUpdatedPointsNumber(){
        $("#scoreCount").html(this.pointsNumber);
    }
}