import { getItems } from "./api/api.js";

const accessToken = "accessToken";
function generateItemFromTemplateId(id) {
  const template = document.querySelector("#" + id);
  return template.content.cloneNode(true);
}

function generaNPlaceholders(n) {
  for (let index = 0; index < n; index++) {
    const element = document.querySelector(".row");
    element.append(generateItemFromTemplateId("template-placeholder"));
  }
}
generaNPlaceholders(16);

getItems()
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Attenzione! C'è un'errore");
    }
  })
  .then((dati) => {
    for (let product of dati) {
      const card = generateItemFromTemplateId("template");
      const nomeProdotto = card.querySelector(".nome");
      const brand = card.querySelector(".brand");
      const price = card.querySelector(".price");
      const description = card.querySelector(".card-text");
      const immagine = card.querySelector(".card-img-top");
      const editBtn = card.querySelector(".modifica");
      const scopriBtn = card.querySelector(".btn-warning");

      editBtn.classList.add(
        sessionStorage.getItem("accessToken") ? "d-block" : "d-none"
      );

      nomeProdotto.innerText = product.name;
      brand.innerText = product.brand;
      price.innerText = `Prezzo: ${product.price.toFixed(2)} $`;
      description.innerText = product.description;
      immagine.src = product.imageUrl;
      editBtn.href = `edit.html?id=${product._id}`;
      scopriBtn.href = `details.html?id=${product._id}`;

      document.querySelector(".row").append(card);
    }
  })
  .catch((err) => {
    console.log("err", err);
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>',
    });
  })
  .finally(() => {
    document
      .querySelectorAll(".col-placeholder")
      .forEach((el) => el.classList.add("d-none"));
  });

document.querySelector(".login").addEventListener("click", () => {
  sessionStorage.setItem(accessToken, "ciao");
  location.reload();
});

if (!sessionStorage.getItem(accessToken)) {
  document.querySelector(".backoffice").classList.add("disabled");
  document.querySelector(".modifica").classList.add("d-none");
} else {
  document.querySelector(".signout").classList.remove("d-none");
  document.querySelector(".login2").classList.add("d-none");
}

document.querySelector(".signout").addEventListener("click", () => {
  sessionStorage.removeItem(accessToken);
  location.reload();
});
