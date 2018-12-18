
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
