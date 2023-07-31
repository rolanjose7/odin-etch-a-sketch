const container = document.querySelector('.container');


function createDiv(num){
    for(let i = 0; i < num; i++){
        var div1 = document.createElement('div');
        div1.classList.add('block');
        container.append(div1);
        hoverDiv(div1);
    }
}
let numberOfDivs = 256;
createDiv(numberOfDivs);

function hoverDiv(div){
    div.addEventListener('mouseover', (event)=>{div.classList.add('hovering')})
}



