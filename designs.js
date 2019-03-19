const container = document.querySelector('#container');


function pixClick(event){
    console.log(event.target)
}

container.addEventListener('click',pixClick);