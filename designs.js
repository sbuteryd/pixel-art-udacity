// Select color input
// Select size input
//
// When size is submitted by the user, call makeGrid()

function makeGrid() {

// Your code goes here!
    const newTable = document.querySelector('#pixelCanvas');
    for (let i = 0; i < 10; i++) {
        const newTr = document.createElement('tr');
        const sum = newTable.appendChild(newTr);
    }


}
console.log(makeGrid());