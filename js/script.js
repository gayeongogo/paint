/* document.querySelector('.range').addEventListener('input',function(event){
    var gradient_value = 100 / event.target.attributes.max.value;
  event.target.style.background = 'linear-gradient(to right, #a465ce 0%, #a465ce '+gradient_value * event.target.value +'%, rgb(236, 236, 236) ' +gradient_value *  event.target.value + '%, rgb(236, 236, 236) 100%)';
}); */



let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

//기본 드로잉
ctx.strokeStyle = "#000000";
ctx.lineWidth = 2.5;
ctx.fillStyle = "white";
ctx.fillRect(0, 0, 700, 700);


let drawing = false;

function stopDrawing() {
    drawing = false; 
};

function startDrawing() {
    drawing = true; 
};

function onMouseMove(event) {
    let x = event.offsetX;
    let y = event.offsetY;

    if(!drawing) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}



//컬러 변경
let colors = document.getElementsByClassName('controls-color');

function colorClick(event) {
    let color = event.target.style.background;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}

Array.from(colors).forEach((color) => {
    color.addEventListener("click", colorClick)
})

//브러쉬 사이즈 변경
let range = document.getElementById("range");

function rangeChange(event) {
    let brushSize = event.target.value;
    ctx.lineWidth = brushSize;
}

if(range){
    range.addEventListener("input", rangeChange);
}

//채우기
let mode = document.getElementById('mode');
let draw = false;
let fill = false;

function modeChange() {
    if(fill === true) {
        fill = false;
        mode.innerText = "Fill"
    }else{
        fill = true;
        mode.innerText = "Draw"
    }
}

function canvasClick() {
    if(fill) {
        ctx.fillRect(0, 0, 700, 700)
    }
}

if(mode){
    mode.addEventListener("click", modeChange);
}

//저장
let save = document.getElementById('save');

function saved() {
    let image = canvas.toDataURL("image/jpg");
    let link = document.createElement('a');
    link.href = image;
    link.download = "drawing";
    link.click()
}

function rightClick(event){

    event.preventDefault();

}

if(save) {
    save.addEventListener("click", saved)
}


if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);
    canvas.addEventListener("click", canvasClick);
    canvas.addEventListener("ontextmenu", rightClick);
}