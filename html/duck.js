myMove();


function myMove() {
    var elem = document.getElementById("duck");   
    var pos = 30;
    var id = setInterval(first, 10);

    function first() {
        if (pos >= 50) {
            clearInterval(id);
            // myMove();
          } else {
            pos+=0.2; 
            elem.style.bottom = pos + '%';
            elem.style.left = pos + '%'; 
          }
    }

  }

  