let cont = 0;
const pacientes = document.querySelectorAll('.paciente');
console.log(pacientes.length);
let pcpeso, pcaltura, imcs;
let valido = true; 
let vilada = true;
for(let i = 0; i < pacientes.length; i++){
   pcpeso = pacientes[i].querySelector('.info-peso').textContent;
   pcaltura = pacientes[i].querySelector('.info-altura').textContent;
   imcs = pacientes[i].querySelector('.info-imc');
   imcs.textContent =  this.validacao(pcpeso,pcaltura, i);
}
function imc(peso, altura) {
    resultado = peso / (altura * altura);
    return this.resultado.toFixed(2);
}
function validacao(peso, altura, i) {
    if (peso <= 0 || peso >= 1000) {
        valido = false;
        pacientes[i].classList.add('invalido');
        return 'Peso Invalidos!'
    }
    else if (altura <= 0 || altura >= 3) {
        valida = false;
        console.log(pacientes[i]);
        pacientes[i].classList.add('invalido');
        return 'Altura invalida!';
    }else {
        valido = true;
        valida = true;
        return this.imc(peso,altura); 
    }
}

