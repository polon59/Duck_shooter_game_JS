var duck = document.getElementById("duck");

function myMove() {
    var elem = document.getElementById("duck"); 
    var pos = 0;
    var id = setInterval(frame, 10);
    function frame() {
        if (pos == 350) {
            clearInterval(id);
        } else {
            pos++; 
            elem.style.top = pos + 'px'; 
            elem.style.left = pos + 'px'; 
        }
    }
}

function flyUp() {


    freeFlight();
}

function freeFlight(){

}

function escape(){

}

function shot(){
    "Nie w szczepionke chuju!";
}