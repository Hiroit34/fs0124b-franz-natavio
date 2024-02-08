const contenitoreNumeri = document.querySelector(".contenitoreNumeri");
for (let index = 1; index <= 77; index++) {
  const tabella = document.createElement("div");
  tabella.innerText = index;
  tabella.classList.add("number");
  contenitoreNumeri.append(tabella);
  console.log(tabella);
}

const bottoneNumero = document.querySelector(".scegliNumeroBtn");

const tabella = document.createElement("div");
console.log(tabella.innerText);
bottoneNumero.addEventListener("click", () => {
  const numeroScelto = Math.ceil(Math.random() * 76);
  const calling = document.querySelector(
    ".contenitoreNumeri .number:nth-child(" + numeroScelto + ")"
  );
  calling.classList.add("scelto");
});
