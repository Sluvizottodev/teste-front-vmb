function renderProdutos(containerId, produtos) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    produtos.forEach(produto => {
        const item = document.createElement("li");
        item.classList.add("produto-card");

        const img = document.createElement("img");
        img.src = produto.image;
        img.alt = produto.title;

        const title = document.createElement("h3");
        title.textContent = produto.title;

        const price = document.createElement("p");
        price.textContent = `R$ ${produto.price.toFixed(2)}`;

        const button = document.createElement("button");
        button.textContent = "COMPRAR";
        button.classList.add("btn-comprar");

        item.append(img, title, price, button);
        container.appendChild(item);
    });
}

fetchProdutos();