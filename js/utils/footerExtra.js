export function initFooterAccordion() {
    const accordionItems = document.querySelectorAll('.footer-accordion-item');
    
    if (accordionItems.length === 0) {
        console.log('Nenhum item de accordion encontrado no footer');
        return;
    }
    
    accordionItems.forEach(item => {
        const header = item.querySelector('.footer-accordion-header');
        
        if (header) {
            header.addEventListener('click', () => {
                accordionItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });
                
                item.classList.toggle('active');
            });
        }
    });
    
    console.log('Footer accordion inicializado com sucesso');
}