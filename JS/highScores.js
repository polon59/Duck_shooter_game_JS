var highScores = [];

addNewrecord(2001);
addNewrecord(5001);
addNewrecord(131);
addNewrecord(332);
addNewrecord(22);

sortHighScores();


function addNewrecord(record) {
    highScores.push(record);
}


function sortNumber(a,b) {
    return b - a;
}


function sortHighScores(params) {
    highScores.sort(sortNumber);
    alert(highScores.join(","));
}