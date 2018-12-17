
$(document).ready(launchApplication());

function launchApplication() {
    // numberOfDucks, duckMovesNumber, initialAmmo
    var game = new Game(18, 5, 5);
    game.startGame();
}

