const apiKey = "GMFc4I7chtglIAVvnEE1aFZPtqugUhv9CrbBGdIA1d4q22DrQJJ9DF2u";

async function chiamata(query) {
  const apiKey = "OBcZBoghnrwnrA02AM5r4PkIAcrYZHgljMGqLCqLRoIHNfRbfv0aq3Md";

  return await fetch(`https://api.pexels.com/v1/search?query=${query}`, {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  }).then((dati) => dati.json());
}

chiamata("pizza").then((pizze) => {
  console.log(pizze);
  const loadBtn = document.querySelector(".btn-primary");
  loadBtn.addEventListener("click", () => {
    const img = document.querySelectorAll(".card-img-top");
    img.forEach((el, i) => {
      el.src = pizze.photos[i].src.landscape;
    });
  });
});
