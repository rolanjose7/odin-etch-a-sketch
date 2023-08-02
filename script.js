const container = document.querySelector('.container');

function createDiv(num){
    for(let i = 0; i < num; i++){
        var div1 = document.createElement('div');
        div1.classList.add('block');
        hoverDiv(div1);
        eraseDiv(div1);
        container.append(div1);
    }
}
let numberOfDivs = 256;
createDiv(numberOfDivs);

function hoverDiv(div){
    const colorPick = document.getElementById('colorpicker');
    div.addEventListener('mouseover', function(){
        div.style.backgroundColor = colorPick.value;

    div.addEventListener('mouseover', (event)=>{div.style.backgroundColor = colorPick.value})
    })
}
function eraseDiv(div){
    const eraserBtn = document.getElementById('eraser');
    eraserBtn.addEventListener('click', function(){
        div.addEventListener('mouseover', function(){
            div.style.backgroundColor = 'white';
        })
    })
}

const cleanBtn = document.getElementById('clean');
cleanBtn.addEventListener('click',(event)=> {location.reload()});


