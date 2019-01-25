var startScreen = new StartScreen();

function launchApplication() {
    let gameParameters = startScreen.getGameParametersFromUserSelect();
    let selectedModeName = gameParameters.modeName;
    let selectedMode;

    if (selectedModeName == "EXTREME") {
        selectedMode = new ExtremeGame(gameParameters);
    }
    else if(selectedModeName == "MODERN"){
        selectedMode = new ModernGame(gameParameters);
    }
    else{
        selectedMode = new ClassicGame(gameParameters);
    }

    startScreen.hideStartScreen();
    selectedMode.startGame();
}

/*
name:"CLASSIC", moves:7, ammunition:3, ducks:2},
{name:"MODERN", moves:6, ammunition:5, ducks:3},
{name:"EXTREME", moves:7, ammunition:5, ducks:1}
*/