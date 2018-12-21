
// $(document).ready(displayMenu());

var startScreen = new StartScreen();

function launchApplication() {
    let gameParameters = startScreen.getGameParametersFromUserSelect();
    let selectedModeName = gameParameters.modeName;

    let extr = new Extreme(gameParameters);
    // let game = new Game(3, 6, 4);
    startScreen.hideStartScreen();
    extr.startGame();
    // game.startGame();
}

/*
name:"CLASSIC", moves:7, ammunition:3, ducks:2},
{name:"MODERN", moves:6, ammunition:5, ducks:3},
{name:"EXTREME", moves:7, ammunition:5, ducks:1}
*/