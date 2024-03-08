function hideSpinner() {
  const spinner = document.querySelector("#spinner");
  spinner.classList.add("d-none");
}

fetch(`https://striveschool-api.herokuapp.com/api/product/`, {
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

    for (let product of dati) {
      let card = generaClone();

      let nomeProdotto = card.querySelector(".nome");
      let brand = card.querySelector(".brand");
      let price = card.querySelector(".price");
      let description = card.querySelector(".card-text");
      let immagine = card.querySelector(".card-img-top");
      let editBtn = card.querySelector(".modifica");
      let scopriBtn = card.querySelector(".btn-success");
      console.log(product);
      nomeProdotto.innerText = product.name;
      brand.innerText = product.brand;
      price.innerText = product.price;
      description.innerText = product.description;
      immagine.src = product.imageUrl;
      editBtn.href = `edit.html?id=${product._id}`;
      scopriBtn.href = `details.html?id=${product._id}`;

      document.querySelector(".row").append(card);
    }
  })
  .catch((err) => {
    console.log("err", err);
  });

function generaClone() {
  //crea un clone del template e inseriscilo nella row
  let template = document.querySelector("#template");
  let clone = template.content.cloneNode(true);

  return clone;
}
