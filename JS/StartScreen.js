class StartScreen{

    constructor(){
        this.availableModes = new Array();
        this.currentModeIndex = 0;
        this.initializeModes();
        this.initializeButtons();
    }


    initializeModes(){
        this.availableModes.push(
            {name:"NORMAL", difficulty:"NORMAL", ammunition:3, ducks:2},
            {name:"CUSTOM", difficulty:"EASY", ammunition:5, ducks:2},
            {name:"EXTREME", difficulty:"HARD", ammunition:30, ducks:15},
        )
    }


    initializeButtons(){
        $("#prevMode").click(()=>this.changeMode("prev"));
        $("#nextMode").click(()=>this.changeMode("next"));
    }


    changeMode(value){
        if (value == "next") {
            if (this.currentModeIndex<2) {
                this.currentModeIndex++;
            }

        } else {
            if (this.currentModeIndex >0) {
                this.currentModeIndex--;
            }
        }
        this.displaySettingsForSelectedMode();
    }


    displaySettingsForSelectedMode(){
        let selectedMode = this.availableModes[this.currentModeIndex];

        $("#modeSelect .selection").html(selectedMode.name);
        $("#diffSelect .selection").html(selectedMode.difficulty);
        $("#ammoSelect .selection").html(selectedMode.ammunition);
        $("#ducksSelect .selection").html(selectedMode.ducks);
    }







    hideStartScreen(){
        document.getElementById("startScreen").style.display = "none";
    }
}