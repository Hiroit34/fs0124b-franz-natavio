fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDg5ZTJkN2IxMTAwMTkwZTZkZTAiLCJpYXQiOjE3MDk4ODk2OTQsImV4cCI6MTcxMTA5OTI5NH0.XBkhfEkZ10-s2tY5G78k0e441coEG4KEXrbjXpiT_xs",
  },
})
  .then((res) => res.json())
  .then((dati) => {
    console.log(dati);

    for (let product of dati) {
      let card = generaClone();

      let nomeProdotto = card.querySelector(".nome");
      let brand = card.querySelector(".brand");
      let price = card.querySelector(".price");
      let description = card.querySelector(".card-text");
      let immagine = card.querySelector(".card-img-top");
      let editBtn = card.querySelector(".modifica");
      console.log(product);
      nomeProdotto.innerText = product.name;
      brand.innerText = product.brand;
      price.innerText = product.price;
      description.innerText = product.description;
      immagine.innerText = product.imgUrl;
      editBtn.href = `edit.html?id=${product._id}`;

      document.querySelector(".row").append(card);
    }
  });

function generaClone() {
  //crea un clone del template e inseriscilo nella row
  let template = document.querySelector("#template");
  let clone = template.content.cloneNode(true);

  return clone;
}
