import { createItem } from "./api/api.js";

const send = document.getElementById("send-form");

send.addEventListener("click", function (e) {
  e.preventDefault();

  const name = document.getElementById("name-product").value;
  const description = document.getElementById("description-area").value;
  const brand = document.getElementById("brand-name").value;
  const imageUrl = document.getElementById("image-url").value;
  const price = document.getElementById("price").value;

  const newProduct = {
    name,
    description,
    brand,
    imageUrl,
    price,
  };

  createItem(newProduct)
    .then((res) => res.json())
    .then(() => {
      location.href = "index.html";
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
