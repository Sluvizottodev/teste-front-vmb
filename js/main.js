import { fetchProdutos } from "./api/produtosApi.js";
import { inicializarMenu } from "./utils/menu.js";

document.addEventListener("DOMContentLoaded", () => {
    inicializarMenu();
    fetchProdutos();
});
