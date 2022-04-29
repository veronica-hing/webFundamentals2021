/*var theDojo = [
  [1, 0, 1, 1, 1, 0, 4, 0, 8, 0],
  [3, 1, 0, 7, 0, 0, 6, 0, 8, 8],
  [5, 0, 7, 0, 3, 6, 6, 6, 0, 0],
  [2, 3, 0, 9, 0, 0, 6, 0, 8, 0],
  [6, 0, 3, 3, 0, 2, 0, 3, 0, 4],
  [0, 0, 3, 3, 0, 0, 2, 2, 3, 0],
  [0, 0, 0, 0, 5, 0, 1, 2, 0, 6],
  [2, 2, 2, 2, 0, 7, 1, 1, 1, 0],
  [5, 2, 0, 2, 0, 0, 0, 1, 1, 2],
  [9, 2, 2, 2, 0, 7, 0, 1, 1, 0],
];
*/
var dojoDiv = document.querySelector("#the-dojo");

// Creates the rows of buttons for this game
function render(aDojo) {
    var result = "";
    for (var i = 0; i < aDojo.length; i++) {
        for (var j = 0; j < aDojo[i].length; j++) {
            result += `<button class="tatami" onclick="isSafe(${i}, ${j}, this)"></button>`;
        }
    }

    dojoDiv.style.width = `${j*32}px`;
    return result;
}

function isSafe(i, j, element){
    if(bestDojo[i][j] === 1){
        dojoDiv.innerHTML = `<button onclick="location.reload()">restart</button>`;
        alert("You've lost");
    } else {
        howMany(i, j, element);
    }
}
// TODO - Make this function tell us how many ninjas are hiding
//        under the adjacent (all sides and corners) squares.
//        Use i and j as the indexes to check theDojo.
function howMany(i, j, element) {
    //console.log({ i, j });
    //alert("TODO - determine how many ninjas are hiding in adjacent squares");
    /*BRAINSTORRM WHAT'S AROUND
    i is the row,
    j is column,
    indexes around i,j :
        (i-1, j-1),(i-1, j), (i-1, j+1)
        (i, j-1), THE SQUARE, (i, j+1)
        (i+1, j-1) (i+1, j) (i+1, j+1)
  */
  //for loop starts at -1
    let totNinjas = 0;
    let dojoRows = bestDojo.length;
    let dojoCols = bestDojo[0].length;
    for (let row = i - 1; row <= i + 1; row++) {
        for (let col = j - 1; col <= j + 1; col++) {
            //gets entire space around i,j INCLUDING I,J
            if((row >= 0 && col >= 0) && (row < dojoRows && col < dojoCols)){
                console.log(bestDojo[row][col]);
                totNinjas += bestDojo[row][col];
            }
        }
    }
    //REMOVE I,J
    totNinjas -= bestDojo[i][j];
    element.innerHTML = totNinjas;
    return totNinjas;
}

function randDojo(row,col, numNinjas){
    let newDojo = Array(row).fill().map(() => Array(col).fill(0));
    let ninjaLocations = new Set(); //use a set since ninjas added have UNIQUE location
    let tempY, tempX;
    while(ninjaLocations.size < numNinjas){
        tempY = Math.floor(Math.random()*row);
        tempX = Math.floor(Math.random()*col);
        ninjaLocations.add([tempY, tempX]);
    }
    
    //place each ninja in the newDojo
    ninjaLocations.forEach((ninja)=>{
        newDojo[ninja[0]][ninja[1]] = 1;
    })

    return newDojo;
}

// BONUS CHALLENGES
// 1. draw the number onto the button instead of alerting it
// 2. at the start randomly place 10 ninjas into theDojo with at most 1 on each spot
// 3. if you click on a ninja you must restart the game
// start the game
// message to greet a user of the game
var style = "color:cyan;font-size:1.5rem;font-weight:bold;";
//console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
//console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
//console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div>
//dojoDiv.innerHTML = render(theDojo);

const bestDojo = randDojo(12,12,10);
console.table(bestDojo);
dojoDiv.innerHTML = render(bestDojo);

