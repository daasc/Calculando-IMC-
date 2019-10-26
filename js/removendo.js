let tabela = document.querySelector("table");
tabela.addEventListener("dblclick", (event) => {
    event.target.parentNode.classList.add('desaparecer');
    setTimeout( () => {
      event.target.parentNode.remove();
    },500);
})