let chara = document.querySelector('#chara');
let etapas = 1;
let cont = 0;
setInterval(() => {
    if(etapas == 1) {
        chara.src = 'images/chara-2.png';
    };
    if(etapas == 2) {
        chara.src = 'images/chara-3.png'; 
    }
    if(etapas == 3) {
        chara.src = 'images/chara-1.png'; 
        etapas -= 3;
    }
    etapas += 1;
    cont += 5;
    chara.style.marginLeft = `${cont}px` ;
}, 300);