const { renderProdutos } = require("../js/renderizarProdutos.js");

describe("renderProdutos", () => {
    let container;

    beforeEach(() => {
        container = document.createElement("ul");
        container.id = "lista-novidades";
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.innerHTML = "";
    });

    it("deve renderizar produtos corretamente", () => {
        const produtos = [
            { title: "Camisa", price: 100, image: "camisa.png" }
        ];

        renderProdutos("lista-novidades", produtos);

        const li = container.querySelector(".produto-card");
        expect(li).not.toBeNull();
        expect(li.querySelector("h3").textContent).toBe("Camisa");
        expect(li.querySelector("p").textContent).toBe("R$ 100.00");
        expect(li.querySelector("img").src).toContain("camisa.png");
    });

    it("deve limpar container antes de renderizar", () => {
        container.innerHTML = "<li>Velho</li>";
        renderProdutos("lista-novidades", []);
        expect(container.innerHTML).toBe("");
    });
});
