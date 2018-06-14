// Select color input
// Select size input
//
// When size is submitted by the user, call makeGrid()

function makeGrid(height,width) {

// Your code goes here!
    const newTable = document.querySelector('#pixelCanvas');
    for (let i = 0; i < height; i++) {
        const newTr = document.createElement('tr');
        const sum = newTable.appendChild(newTr);
    }
    const newFind = document.querySelector('#pixelCanvas').querySelectorAll('tr');
    for (let i =0 ;i<width;i++){
        for(let x=0;x<width;x++){
            const newTd = document.createElement('td');
            newFind[i].appendChild(newTd);
        }
    }
}
console.log(makeGrid(2,3));