import { deleteItem, getItem, updateItem } from "./api/api.js";

const send = document.querySelector(".send-form");

let url = new URLSearchParams(location.search);
let id = url.get("id");

getItem(id)
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
  })
  .catch(console.error);

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

  updateItem(id, prodotto)
    .then((res) => res.json())
    .then((dati) => {
      console.log(dati);
      Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`,
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire("Saved!", "", "success").then(() => {
            location.href = "index.html";
          });
        } else if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        }
      });
    });
});

let deleteBtn = document.querySelector(".btn-danger");
deleteBtn.addEventListener("click", function (e) {
  e.preventDefault();
  deleteItem(id)
    .then((res) => res.json())
    .then(() => {
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      }).then(() => {
        location.href = "index.html";
      });
    })
    .catch((err) => {
      console.log("err", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="#">Why do I have this issue?</a>',
      });
    });
});
