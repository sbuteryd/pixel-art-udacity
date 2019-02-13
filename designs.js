// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
let height;
let width;

const pixelCanvas = document.querySelector('#pixelCanvas');

function getTarget() {
    pixelCanvas.addEventListener('click',function (e) {
        const other = document.querySelector('#colorPicker');
        e.target.style.backgroundColor = other.value
    })
}

function makeGrid() {
    const useinput = document.querySelector('.useinput');
    useinput.addEventListener('click',function (e) {
        e.preventDefault();
        height = document.querySelector('#inputHeight').value;
        width = document.querySelector('#inputWidth').value;
        console.log(height,width);

        for (let i=0; i<height;i++){
            let second = document.createElement('tr');
            pixelCanvas.appendChild(second);
            for (let i =0;i<width;i++){
                let third = document.createElement('td');
                third.textContent = i;
                second.appendChild(third)
            }
        }
    });
    getTarget()
// Your code goes here

}
makeGrid();

