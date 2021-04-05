const peso = document.querySelector("[data-form-peso]");
const altura = document.querySelector("[data-form-altura]");
import { imc, tempo, principal}  from "./principal.js";
export const main = (evento) => {
  evento.preventDefault();
  const form = document.querySelector("[data-form]");
  const pacient = obterdados(form);

  if (!validandopeso(pacient)) {
    return;
  }
  if (!validandoaltura(pacient)) {
    return;
  }

  add(pacient);

  form.reset();
};

function add(pacient) {
  let pacientetr = criartr(pacient);
  let tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacientetr);
  message();
  tempo();
  principal();
}

function obterdados(form) {
  let pacientess = {
    nome: form.nome.value,
    pesos: form.peso.value,
    alturas: form.altura.value,
    gordura: form.gordura.value,
    imc: imc(form.peso.value, form.altura.value),
  };
  return pacientess;
}
function criartr(pacient) {
  let pacientetr = document.createElement("tr");
  pacientetr.classList.add("paciente");

  let nometd = criartd(pacient.nome, "info-nome");
  let pesotd = criartd(pacient.pesos, "info-peso");
  let alturatd = criartd(pacient.alturas, "info-altura");
  let gorduratd = criartd(pacient.gordura, "info-gordura");
  let imctd = criartd(imc(pacient.pesos.replace(",", "."), pacient.alturas.replace(",", ".")), "info-imc");
  let level = criartd("", "info-level");

  pacientetr.appendChild(nometd);
  pacientetr.appendChild(pesotd);
  pacientetr.appendChild(alturatd);
  pacientetr.appendChild(gorduratd);
  pacientetr.appendChild(imctd);
  pacientetr.appendChild(level);

  return pacientetr;
}

function criartd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado.replace(",", ".");
  td.classList.add(classe);
  return td;
}

function validandopeso(paciente) {
  if (parseInt(paciente.pesos, 10) > 0 && parseInt(paciente.pesos, 10) < 1000) {
    peso.classList.remove("borda");
    return true;
  }
  peso.classList.add("borda");
  return false;
}
function validandoaltura(paciente) {
  if (
    parseInt(paciente.alturas, 10) > 0 &&
    parseInt(paciente.alturas, 10) < 3
  ) {
    altura.classList.remove("borda");
    return true;
  }
  altura.classList.add("borda");
  return false;
}

function message() {
  let success = `<span class="message success--message show">
  <div class="message__container">
    <span class="icon">
      <img src="./assets/images/check.svg" alt="" />
    </span>
    <span class="message__text">Cadastrado Com Sucesso</span>
  </div>
  <div class="barra success--barra"></div>
</span>
`;
  const alert = document.querySelector(".alert");
  alert.innerHTML = success;
}
