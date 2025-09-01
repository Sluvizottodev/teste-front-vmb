import { initFooterAccordion } from '../js/utils/footerExtra.js'; 
// testes feito com auxílio
describe('initFooterAccordion', () => {
    let accordionContainer;

    beforeEach(() => {
        accordionContainer = document.createElement('div');
        accordionContainer.innerHTML = `
        <div class="footer-accordion-item">
            <div class="footer-accordion-header">Header 1</div>
            <div class="footer-accordion-content">Content 1</div>
        </div>
        <div class="footer-accordion-item">
            <div class="footer-accordion-header">Header 2</div>
            <div class="footer-accordion-content">Content 2</div>
        </div>
    `;
        document.body.appendChild(accordionContainer);
    });

    afterEach(() => {
        if (accordionContainer && document.body.contains(accordionContainer)) {
            document.body.removeChild(accordionContainer);
        }
        accordionContainer = null;
    });

    test('deve inicializar o accordion e adicionar event listeners', () => {
        const accordionItems = document.querySelectorAll('.footer-accordion-item');
        const header = accordionItems[0].querySelector('.footer-accordion-header');

        initFooterAccordion();

        expect(accordionItems[0].classList.contains('active')).toBe(false); 

        header.click();
        expect(accordionItems[0].classList.contains('active')).toBe(true);

        header.click();
        expect(accordionItems[0].classList.contains('active')).toBe(false);
    });

    test('deve fechar outros itens ao abrir um novo', () => {
        const accordionItems = document.querySelectorAll('.footer-accordion-item');
        const header1 = accordionItems[0].querySelector('.footer-accordion-header');
        const header2 = accordionItems[1].querySelector('.footer-accordion-header');

        initFooterAccordion();

        header1.click();
        expect(accordionItems[0].classList.contains('active')).toBe(true);
        expect(accordionItems[1].classList.contains('active')).toBe(false);

        header2.click();
        expect(accordionItems[0].classList.contains('active')).toBe(false);
        expect(accordionItems[1].classList.contains('active')).toBe(true);
    });

    test('deve logar mensagem se nenhum item for encontrado', () => {
        const originalConsoleLog = console.log;
        console.log = jest.fn();

        document.body.removeChild(accordionContainer);
        accordionContainer = null;

        initFooterAccordion();

        expect(console.log).toHaveBeenCalledWith('Nenhum item de accordion encontrado no footer');
        console.log = originalConsoleLog;
    });
});