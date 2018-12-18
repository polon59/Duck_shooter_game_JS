class StartScreen{

    constructor(){
        this.availableModes = new Array();
        this.currentModeIndex = -1;
        this.initializeModes();
        this.initializeButtons();
        this.changeMode("next");
    }


    initializeModes(){
        this.availableModes.push(
            {name:"CLASSIC", moves:7, ammunition:3, ducks:2},
            {name:"MODERN", moves:6, ammunition:5, ducks:3},
            {name:"EXTREME", moves:7, ammunition:5, ducks:1}
        )
    }


    initializeButtons(){
        $("#prevMode").click(()=>this.changeMode("prev"));
        $("#nextMode").click(()=>this.changeMode("next"));
        $("#prevDiff").click(()=>this.changeDifficulty("next"));
        $("#nextDiff").click(()=>this.changeDifficulty("next"));
    }

    
    changeMode(togle){
        if (togle == "next") {
            if (this.currentModeIndex<2) {
                this.currentModeIndex++;
            }
        } else {
            if (this.currentModeIndex >0) {
                this.currentModeIndex--;
            }
        }
        this.displaySettingsForCurrentMode();
    }


    displaySettingsForCurrentMode(){
        let selectedMode = this.availableModes[this.currentModeIndex];
        $("#modeSelect .selection").html(selectedMode.name);
        $("#diffSelect .selection").html(selectedMode.difficulty);
        $("#ammoSelect .selection").html(selectedMode.ammunition);
        $("#ducksSelect .selection").html(selectedMode.ducks);
        this.changeVisibilityOfArrows();
    }


    changeVisibilityOfArrows(){
        let currentModeName = this.availableModes[this.currentModeIndex].name;
        if (currentModeName == "CLASSIC") {
            $("#diffSelect .arrow").css("visibility","visible");
            $("#ammoSelect .arrow").css("visibility","hidden");
            $("#ducksSelect .arrow").css("visibility","hidden");
        }
        else if(currentModeName == "CUSTOM"){
            $("#diffSelect .arrow").css("visibility","visible");
            $("#ammoSelect .arrow").css("visibility","visible");
            $("#ducksSelect .arrow").css("visibility","visible");
        }
        else{
            $("#diffSelect .arrow").css("visibility","hidden");
            $("#ammoSelect .arrow").css("visibility","hidden");
            $("#ducksSelect .arrow").css("visibility","hidden");
        }
    }


    getGameParametersFromUserSelect(){
        let selectedMode = this.availableModes[this.currentModeIndex];
        let gameParameters = {modeName:selectedMode.name, ducksNumber:selectedMode.ducks, movesNumber:selectedMode.moves, initialAmmo:selectedMode.ammunition};
        return gameParameters;
    }


    hideStartScreen(){
        document.getElementById("startScreen").style.display = "none";
    }
}