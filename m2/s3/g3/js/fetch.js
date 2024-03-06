fetch("https://striveschool-api.herokuapp.com/books", {})
  .then((response) => response.json())
  .then((res) => {
    console.log(res);

    for (const books of res) {
      let row = document.getElementById("riga");

      let col = document.createElement("div");
      col.classList.add("col");
      row.append(col);

      let card = document.createElement("div");
      card.classList.add("card");
      col.append(card);

      let image = document.createElement("img");
      image.classList.add("card-img-top");
      image.setAttribute("src", books.img);
      image.style.width = "100%";
      card.append(image);

      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
      card.append(cardBody);

      let title = document.createElement("h5");
      title.classList.add("card-title");
      cardBody.append(title);
      title.innerHTML = books.title;

      let text = document.createElement("p");
      text.classList.add("card-text");
      cardBody.append(text);
      text.innerHTML = books.price;

      let ancore = document.createElement("a");
      ancore.classList.add("btn", "btn-success");
      cardBody.append(ancore);
      ancore.innerHTML = "Aggiungi";
    }
  });
