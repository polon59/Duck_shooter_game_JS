
function showComboMessage(posX,posY, comboValue){
    $(".comboMessage")
        .html(`COMBO ${comboValue}!`)
        .css("top", posY)
        .css("left", posX)
        .css("display", "block");
    
    let x = setTimeout(hideComboMessage, 1000);
    console.log("show");
}

function hideComboMessage(){
    console.log("hide");
    $(".comboMessage").css("display", "none");
}

function displayProgressOnProgressBar(percent){
    $("#roundProgress").css("width", `${percent}%`)
    .attr("aria-valuenow", percent)
    .text(`${percent}%`);
    changeProgressBarColor(percent)
}

function changeProgressBarColor(percent) {
    let colorValue = "rgb(189, 0, 0)";

    if (percent >= 90) {
        colorValue = "rgb(51, 219, 0)";
    }
    else if (percent >= 80){
        colorValue = "rgb(252, 172, 0)"
    }
    $("#roundProgress").css("background-color", colorValue);
}

function displayEndScreen(pointsHandler, totalSuccessfulHits, accuracy){
    $("#pointsSummary").text(pointsHandler.pointsNumber);
    $("#roundSummary").text(pointsHandler.level);
    $("#shotsSummary").text(totalSuccessfulHits);
    $("#accuracySummary").text(`${accuracy}%`);
    $("#overlay").show();
}

function disableLifeIcon(lifeNumber){
    $(`#life${lifeNumber}`).css("filter", "grayscale(100%)");
}

