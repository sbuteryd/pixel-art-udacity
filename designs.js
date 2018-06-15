// Select color input
// Select size input
//
// When size is submitted by the user, call makeGrid()



const clickOn = document.URL;
const clickSplit = clickOn.split('?');
const heightWe = clickSplit[1].split('&');
const height = heightWe[0].split('=');
const weight = heightWe[1].split('=');

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
            const theColor =document.querySelector('#colorPicker');
            newTd.addEventListener("click",function () {
                newTd.style.backgroundColor = theColor.value;
            });
        }
    }
}
makeGrid(height[1],weight[1]);