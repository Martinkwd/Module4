fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    const template = document.getElementById("cards-template");
    for (let product of products) {
      const card = template.content.cloneNode(true);
      card.querySelector(".card-title").innerText = product.title;
      card.querySelector(".card-price").innerText = product.price;
      card.querySelector(".card-description").innerText = product.description;
      card.querySelector(".card-img-top").setAttribute("src", product.image);
      document.getElementById("cards").appendChild(card);
    }
  });
