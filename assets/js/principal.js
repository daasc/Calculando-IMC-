const pacientes = document.querySelectorAll(".paciente");
let pcpeso, pcaltura, imcs;
let valido = true;
for (let i = 0; i < pacientes.length; i++) {
  pcpeso = converterStringOfInt(
    pacientes[i].querySelector(".info-peso").textContent
  );
  pcaltura = converterStringOfInt(
    pacientes[i].querySelector(".info-altura").textContent
  );
  imcs = pacientes[i].querySelector(".info-imc");
  imcs.textContent = validacao(pcpeso, pcaltura, i);
}
export function imc(peso, altura) {
  let resultado = peso / (altura * altura);
  return resultado.toFixed(2);
}
export function validacao(peso, altura, i) {
  if (peso <= 0 || peso >= 1000) {
    valido = false;
    pacientes[i].classList.add("invalido");
    return "Peso Invalidos!";
  } else if (altura <= 0 || altura >= 3) {
    valida = false;
    console.log(pacientes[i]);
    pacientes[i].classList.add("invalido");
    return "Altura invalida!";
  } else {
    valido = true;
    return imc(peso, altura);
  }
}

function converterStringOfInt(valor) {
  return isInteger(Number(valor))
    ? parseInt(valor, 10)
    : parseFloat(valor);
}
function isInteger(n) {
  return n === +n && n === (n | 0);
}

export function tempo() {
    const barra = document.querySelector('.barra');
    const message = document.querySelector('.message')
    if(barra) {
        let tamanho = 100;
        const interval = setInterval(function() {
          let time = tamanho--;
          barra.style.width = `${time}%`;
          if(time == 0) {
              clearInterval(interval);
              message.classList.remove('show');
              message.classList.add('hidden');
          }
        }, 100);
    }
}