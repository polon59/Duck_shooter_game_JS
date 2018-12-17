class StartScreen{

    constructor(){
        this.availableModes = new Array();
        this.currentModeIndex = 0;
        this.initializeModes();
        this.initializeButtons();
        this.changeMode("next");
    }


    initializeModes(){
        this.availableModes.push(
            {name:"CUSTOM", difficulty:"EASY", ammunition:5, ducks:2},
            {name:"CLASSIC", difficulty:"EASY", ammunition:3, ducks:2},
            {name:"EXTREME", difficulty:"HARD", ammunition:30, ducks:15}
        )
    }


    initializeButtons(){
        $("#prevMode").click(()=>this.changeMode("prev"));
        $("#nextMode").click(()=>this.changeMode("next"));
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






    hideStartScreen(){
        document.getElementById("startScreen").style.display = "none";
    }
}