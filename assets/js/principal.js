let pcpeso, pcaltura, imcs, level;
let valido = true;
export function principal () {
  const pacientes = document.querySelectorAll(".paciente");
  console.log(pacientes.length);
  for (let i = 0; i < pacientes.length; i++) {
    pcpeso = converterStringOfInt(
      pacientes[i].querySelector(".info-peso").textContent
    );
    pcaltura = converterStringOfInt(
      pacientes[i].querySelector(".info-altura").textContent
    );
    level = pacientes[i].querySelector(".info-level");
    imcs = pacientes[i].querySelector(".info-imc");
    let valorImc = validacao(pcpeso, pcaltura, i);
    imcs.textContent = valorImc;
    levelImc(valorImc, level);
  }
} 
export function imc(peso, altura) {
  let resultado = peso / (altura * altura);
  return resultado.toFixed(2);
}
function levelImc(value, level) {
  if (value >= 18.5 && value <= 24.9) {
    level.classList.add("normal");
  }
  if (value >= 25 && value <= 29.9) {
    level.classList.add("warning");
  }
  if (value >= 30 && value <= 34.9) {
    level.classList.add("danger");
  }
  if (value >= 35) {
    level.classList.add("mortal");
  }
  if(value < 18.5) {
    level.classList.add('thin');
  }
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
  return isInteger(Number(valor)) ? parseInt(valor, 10) : parseFloat(valor);
}
function isInteger(n) {
  return n === +n && n === (n | 0);
}

export function tempo() {
  const barra = document.querySelector(".barra");
  const message = document.querySelector(".message");
  if (barra) {
    let tamanho = 100;
    const interval = setInterval(function () {
      let time = tamanho--;
      barra.style.width = `${time}%`;
      if (time == 0) {
        clearInterval(interval);
        message.classList.remove("show");
        message.classList.add("hidden");
      }
    }, 100);
  }
}

principal();