// Select color input
// Select size input
//
// When size is submitted by the user, call makeGrid()
const clickOn = document.URL;
const clickSplit = clickOn.split('?');
const heightWe = clickSplit[1].split('&');
const getHeight = heightWe[0].split('=');
const getWeight = heightWe[1].split('=');

const height = getHeight[1];
const weight = getWeight[1];
console.log(height,weight);


function makeGrid(height,width) {

// Your code goes here!
    const newTable = document.querySelector('#pixelCanvas');
    for (let i = 0; i < height; i++) {
        const newTr = document.createElement('tr');
        const sum = newTable.appendChild(newTr);
    }
    const newFind = document.querySelector('#pixelCanvas').querySelectorAll('tr');
    for (let i =0 ;i<height;i++){
        for(let x=0;x<width;x++){
            const newTd = document.createElement('td');
            newFind[i].appendChild(newTd);
        }
    }
}
console.log(makeGrid(height,weight));