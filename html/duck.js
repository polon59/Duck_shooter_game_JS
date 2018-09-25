var posY = 20;
var posX = 48;

var firstMove;
var secondMove;

var destY;
var destX;

myMove();



function myMove() {
    var elem = document.getElementById("duck"); 
    firstMove = setInterval(first, 10);

    for (let index = 0; index < 4; index++) {
        pickRandom();
        // alert(destX + "  " + destY);
        secondMove = setInterval(second, 10);   
    }



        function pickRandom() {
            destY = Math.random() * (99 - 30) + 30;
            destX = Math.random() * (99 - 0) + 0;
        }

        function first() {
            if (posY >= 50) {
                clearInterval(firstMove);
            } else {
                posX +=0.1; 
                posY += 0.2;
                elem.style.bottom = posY + '%';
                elem.style.left = posX + '%'; 
            }
        }

        
        function second() {
                if (posY >= destY && posX >= destX) {
                    clearInterval(secondMove);
                }

                else {
                    if (posX < destX && posY < destY) {
                        posX +=0.1; 
                        posY += 0.1;
                        changePosition();
                    }
                    else if(posX > destX && posY > destY){
                        posX -= 0.1; 
                        posY -= 0.1;
                        changePosition();
                    }
                    
                }
            }

        function changePosition() {
            elem.style.bottom = posY + '%';
            elem.style.left = posX + '%'; 
        }

    }



  