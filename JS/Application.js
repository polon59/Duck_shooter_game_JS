
// $(document).ready(displayMenu());

var startScreen = new StartScreen();

function launchApplication() {
    let gameParameters = startScreen.getGameParametersFromUserSelect();
    let game = new Game(gameParameters.modeName, gameParameters.ducksNumber, gameParameters.movesNumber, gameParameters.initialAmmo);
    // let game = new Game(3, 6, 4);
    startScreen.hideStartScreen();
    game.startGame();
}

