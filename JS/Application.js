
// $(document).ready(displayMenu());

var startScreen = new StartScreen();

function launchApplication() {
    let gameParameters = startScreen.getGameParametersFromUserSelect();
    let game = new Game(gameParameters.ducksNumber, gameParameters.movesNumber, gameParameters.initialAmmo);
    startScreen.hideStartScreen();
    game.startGame();
}

