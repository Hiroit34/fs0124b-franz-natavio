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

  fetch("https://striveschool-api.herokuapp.com/api/product/", {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWVhZDg5ZTJkN2IxMTAwMTkwZTZkZTAiLCJpYXQiOjE3MDk4ODk2OTQsImV4cCI6MTcxMTA5OTI5NH0.XBkhfEkZ10-s2tY5G78k0e441coEG4KEXrbjXpiT_xs",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  })
    .then((res) => res.json())
    .then((dati) => {
      location.href = "index.html";
    });
});
