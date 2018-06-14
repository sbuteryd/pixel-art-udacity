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
    const newFind = document.querySelector('#pixelCanvas').querySelectorAll('tr');
    for (let i =0 ;i<10;i++){
        for(let x=0;x<10;x++){
            const newTd = document.createElement('td');
            newFind[i].appendChild(newTd);
        }
    }
}
console.log(makeGrid());