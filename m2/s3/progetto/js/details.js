const send = document.querySelector(".send-form");

let url = new URLSearchParams(location.search);
let id = url.get("id");

fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDg5ZTJkN2IxMTAwMTkwZTZkZTAiLCJpYXQiOjE3MDk4ODk2OTQsImV4cCI6MTcxMTA5OTI5NH0.XBkhfEkZ10-s2tY5G78k0e441coEG4KEXrbjXpiT_xs",
  },
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Attenzione! C'è un'errore");
    }
  })
  .then((dati) => {
    console.log(dati);
    let card = generaClone();

    let nomeProdotto = card.querySelector(".nome");
    let brand = card.querySelector(".brand");
    let price = card.querySelector(".price");
    let description = card.querySelector(".card-text");
    let immagine = card.querySelector(".card-img-top");
    let editBtn = card.querySelector(".modifica");
    console.log(dati);
    nomeProdotto.innerText = dati.name;
    brand.innerText = dati.brand;
    price.innerText = dati.price;
    description.innerText = dati.description;
    immagine.src = dati.imageUrl;

    document.querySelector(".row").append(card);
  });

function generaClone() {
  //crea un clone del template e inseriscilo nella row
  let template = document.querySelector("#template");
  let clone = template.content.cloneNode(true);

  return clone;
}
