const send = document.querySelector(".send-form");

let url = new URLSearchParams(location.search);
let id = url.get("id");

console.log(id);

//step 2: recupero i dati di questa pizza e li uso per popolare il form
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
    let nomeProdotto = document.querySelector(".name-product");
    let brand = document.querySelector(".brand-name");
    let price = document.querySelector(".price");
    let immagine = document.querySelector(".image-url");
    let descrizione = document.querySelector(".description-area");

    nomeProdotto.value = dati.name;
    brand.value = dati.brand;
    price.value = dati.price;
    immagine.value = dati.imageUrl;
    descrizione.value = dati.description;

    console.log(nomeProdotto.value);
  });

send.addEventListener("click", function (e) {
  e.preventDefault();

  let name = document.querySelector(".name-product").value;
  let brand = document.querySelector(".brand-name").value;
  let price = document.querySelector(".price").value;
  let imageUrl = document.querySelector(".image-url").value;
  let description = document.querySelector(".description-area").value;

  let prodotto = {
    name,
    brand,
    price,
    imageUrl,
    description,
  };

  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    method: "PUT",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDg5ZTJkN2IxMTAwMTkwZTZkZTAiLCJpYXQiOjE3MDk4ODk2OTQsImV4cCI6MTcxMTA5OTI5NH0.XBkhfEkZ10-s2tY5G78k0e441coEG4KEXrbjXpiT_xs",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(prodotto),
  })
    .then((res) => res.json())
    .then((dati) => {
      console.log(dati);
      Swal.fire("Prodotto Modificato!");
    });
});

let deleteBtn = document.querySelector(".btn-danger");
console.log(deleteBtn);
deleteBtn.addEventListener("click", function (e) {
  e.preventDefault();
  fetch(`https://striveschool-api.herokuapp.com/api/product/${id}`, {
    method: "DELETE",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDg5ZTJkN2IxMTAwMTkwZTZkZTAiLCJpYXQiOjE3MDk4ODk2OTQsImV4cCI6MTcxMTA5OTI5NH0.XBkhfEkZ10-s2tY5G78k0e441coEG4KEXrbjXpiT_xs",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((dati) => {
      Swal.fire("SweetAlert2 is working!");
    })
    .catch((err) => {
      console.log("err", err);
      hideSpinner();
    });
});
