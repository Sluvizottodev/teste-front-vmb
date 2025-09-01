import { renderProdutos } from '../js/utils/renderProdutos.js';

describe('renderProdutos', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        container.id = 'produtos-container';
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    test('deve renderizar produtos corretamente no container', () => {
        const produtos = [
            { id: 1, title: 'Produto 1', price: 10.99, image: 'image1.jpg' },
            { id: 2, title: 'Produto 2', price: 20.99, image: 'image2.jpg' }
        ];

        renderProdutos('produtos-container', produtos);

        const items = container.querySelectorAll('.produto-card');
        expect(items).toHaveLength(2);

        expect(items[0].querySelector('h3').textContent).toBe('Produto 1');
        expect(items[0].querySelector('p').textContent).toBe('R$ 10.99');
        expect(items[0].querySelector('img').src).toContain('image1.jpg');
        expect(items[0].querySelector('img').alt).toBe('Produto 1');
        expect(items[0].querySelector('button').textContent).toBe('COMPRAR');
    });

    test('deve limpar o container antes de renderizar', () => {
        container.innerHTML = '<div>Conteúdo pré-existente</div>';
        const produtos = [{ id: 1, title: 'Produto 1', price: 10.99, image: 'image1.jpg' }];

        renderProdutos('produtos-container', produtos);

        expect(container.querySelector('div')).toBeNull();
        expect(container.querySelectorAll('.produto-card')).toHaveLength(1);
    });

    test('não deve renderizar se o container não existir', () => {
        const produtos = [{ id: 1, title: 'Produto 1', price: 10.99, image: 'image1.jpg' }];
        const originalConsoleLog = console.log;
        console.log = jest.fn();

        renderProdutos('container-inexistente', produtos);

        expect(console.log).not.toHaveBeenCalled();
        console.log = originalConsoleLog;
    });
});