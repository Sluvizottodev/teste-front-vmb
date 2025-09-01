# 🛍️ Projeto Loja Virtual - Frontend

Este projeto é uma **página fictícia de e-commerce** desenvolvida como desafio prático de HTML, CSS e JavaScript.
O objetivo foi aplicar conceitos de **estruturação semântica**, **responsividade** e **dinamismo com consumo de API (JSON)**, simulando uma loja real.

---

## 🎨 Layout do Projeto (Figma)

O design de referência utilizado neste desafio está disponível no Figma:
👉 [Acessar Layout no Figma](https://www.figma.com/design/3abDpHj0DSNCaYJBfSHjMc/Teste-Vambora-Coders?node-id=0-1&t=l7IrEpEDnMFGYuts-0)

---

## 🔗 API Utilizada

Os produtos são carregados dinamicamente a partir da Fake Store API:
👉 [https://fakestoreapi.com/products](https://fakestoreapi.com/products)

---

## 🌐 Deploy (GitHub Pages)

A aplicação está disponível online através do GitHub Pages:
👉 [https://sluvizottodev.github.io/teste-front-vmb](https://sluvizottodev.github.io/teste-front-vmb)

---

## 📌 Funcionalidades Implementadas

### ✅ Requisitos Obrigatórios

1. **Cabeçalho (Header)**

   * Logo fictício.
   * Menu de navegação centralizado.
   * Ícones de busca, login e carrinho (com hover effect).
   * Header fixo no topo ao rolar a página.

2. **Banner Principal (Hero)**

   * Imagem de destaque grande.
   * Texto de chamada principal.

3. **Seção de Benefícios**

   * 3 colunas com ícones + textos:

     * Parcelamento.
     * Desconto no PIX.
     * Programa de pontos.

4. **Seções de Produtos**

   * **Novidades** → lista dinâmica com pelo menos 4 produtos.
   * **Mais Vendidos** → lista dinâmica com pelo menos 4 produtos.
   * Produtos carregados de um **arquivo JSON via fetch API**.
   * Cards com imagem, nome, preço e botão **"Comprar"**.

5. **Seção Institucional (Novo Clássico)**

   * Texto fictício (lorem ipsum).
   * Botão de call-to-action.

6. **Seção Coleção**

   * Outra lista de produtos (mínimo 4).

7. **Rodapé (Footer)**

   * Newsletter com campo de e-mail.
   * Links de contato e redes sociais.
   * Ícones de meios de pagamento.

---

## ⚙️ Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**

---

## 📂 Estrutura de Pastas

```md
📦 teste-front-vmb
├── 📂 assets/        
├── 📂 css/        
├── 📂 js/
│   ├── 📂 api/   
│   ├── 📂 utils/     
│   └── main.js     
├── 📂 test/     
├── index.html       
└── README.md
```

---

## ▶️ Como Rodar o Projeto

1. **Clone o repositório**

   ```bash
   git clone https://github.com/Sluvizottodev/teste-front-vmb.git
   ```

2. **Entre na pasta do projeto**

3. **Abra o arquivo `index.html` no navegador**

   * Basta utilizar uma extensão como o **Live Server** no VSCode.

4. **Rodar os testes (opcional)**
