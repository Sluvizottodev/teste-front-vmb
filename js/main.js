import { fetchProdutos } from "./api/produtosApi.js";
import { inicializarMenu } from "./utils/menu.js";
import { initFooterAccordion } from "./utils/footerExtra.js"; // Importação adicionada

document.addEventListener("DOMContentLoaded", () => {
    inicializarMenu();
    fetchProdutos();
    initFooterAccordion();
});