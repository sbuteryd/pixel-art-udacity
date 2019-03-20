function pixClick(event){
    let  inputHeight,inputWeight,color;
    if(event.target.className === 'useinput'){
        event.preventDefault();
        inputHeight = document.getElementById('inputHeight').value
        inputWeight = document.getElementById('inputWeight').value
        createEelemnt(inputHeight,inputWeight,)
    }else if (event.target.nodeName === 'TD'){
        color = document.getElementById('colorPicker').value;
        event.target.style.backgroundColor = color
    }
}

function createEelemnt(inputHeight,inputWeight){
    let pixelCanvas = document.getElementById('pixelCanvas');
    for(let i=0;i<inputHeight;i++){
        let row = pixelCanvas.insertRow(-1);
        for(let y=0;y<inputWeight;y++){
           let cell= row.insertCell(0)
        }
    }
}

const container = document.querySelector('#container');//1
container.addEventListener('click',pixClick);