import { getItem } from "./api/api.js";

const url = new URLSearchParams(location.search);
const id = url.get("id");

document.querySelector(".container-loading").classList.add("d-block");

getItem(id)
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Attenzione! C'è un'errore");
    }
  })
  .then((dati) => {
    const nomeProdotto = document.querySelector("#name");
    const brand = document.querySelector("#brand");
    const price = document.querySelector("#price");
    const description = document.querySelector("#description");
    const immagine = document.querySelector("#imageUrl");

    nomeProdotto.innerText = dati.name;
    brand.innerText = dati.brand;
    price.innerText = `Prezzo: ${dati.price.toFixed(2)} $`;
    description.innerText = dati.description;
    immagine.src = dati.imageUrl;
  })
  .catch(console.error)
  .finally(() => {
    document.querySelector(".container-loading").classList.add("d-none");
    document.querySelector(".container-loading").classList.remove("d-block");
  });
