const API_URL = "https://fakestoreapi.com/products";

async function fetchProdutos(){
    try{
        const response = await fetch(API_URL);
        if(!response.ok){
            throw new Error("Erro ao buscar produtos: ${response.status}");
        }
        const produtos = await response.json();

        const novidades = produtos.slice(0, 4); 
        const maisVendidos = produtos.slice(4, 8); 
        const colecao = produtos.slice(8, 12);

        renderProdutos("lista-novidades", novidades);
        renderProdutos("lista-mais-vendidos", maisVendidos);
        renderProdutos("lista-colecao", colecao);

    } catch (error) {
        console.error("Erro ao carregar produtos:", error);
        ["lista-novidades", "lista-mais-vendidos", "lista-colecao"].forEach(id => {
            const el = document.getElementById(id);
            el.innerHTML = "<p>Não foi possível carregar os produtos. Tente novamente mais tarde.</p>";
        });
    }
}
