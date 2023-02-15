/* document.querySelector('.range').addEventListener('input',function(event){
    var gradient_value = 100 / event.target.attributes.max.value;
  event.target.style.background = 'linear-gradient(to right, #a465ce 0%, #a465ce '+gradient_value * event.target.value +'%, rgb(236, 236, 236) ' +gradient_value *  event.target.value + '%, rgb(236, 236, 236) 100%)';
}); */

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");


ctx.strokeStyle = "#000000";
ctx.lineWidth = 2.5;

let drawing = false;

function stopDrawing() {
    drawing = false; 
};

function startDrawing() {
    drawing = true; 
};

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;

    if(!drawing) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function onMouseDown(event) {
    drawing = true;
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseleave", stopDrawing);
}