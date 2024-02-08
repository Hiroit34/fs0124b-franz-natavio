const input = document.querySelector("#input");
const bottone = document.querySelector("#creaTask");
const listaEsterna = document.querySelector(".lista");

bottone.addEventListener("click", function () {
  const listaInterna = document.createElement("li");

  listaInterna.innerText = input.value;
  listaInterna.classList.add("task");
  listaEsterna.appendChild(listaInterna);
});
