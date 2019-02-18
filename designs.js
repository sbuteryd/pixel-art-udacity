const useinput = document.querySelector('.useinput');//提交按钮
const pixelCanvas = document.querySelector('#pixelCanvas');//表个区域
const fragment = document.createDocumentFragment();//虚拟 一次性添加
const other = document.querySelector('#colorPicker'); //得到颜色
let height;
let  width;
let tableTr;
let tableTd;

//开始代码
function makeTable(e) {
    console.log(e.target);
    e.preventDefault();
    findelement()//得到width 和 height
    makeTableTrtd()//绘制表格
    getColor()//绘制颜色
}
//得到width 和 height
function findelement (){
    height = document.querySelector('#inputHeight').value;
    width = document.querySelector('#inputWeight').value;
}
//绘制表格
function makeTableTrtd(){
    for (let i =0 ;i<height;i++){
        tableTr = document.createElement('tr');
        for (let i=0;i<width;i++){
            tableTd = document.createElement('td');
            tableTr.appendChild(tableTd)
        }
        fragment.appendChild(tableTr)//虚拟添加
    }
    pixelCanvas.appendChild(fragment)//添加到页面

}

//点击更改颜色
function getColor() {
    pixelCanvas.addEventListener('click',function (e) {
        e.target.style.backgroundColor = other.value
    })
}


useinput.addEventListener('click',makeTable);

