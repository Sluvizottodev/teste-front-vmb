(function(){
    const btn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    if(btn && menu){
        btn.addEventListener('click', function(){
            const isOpen = menu.classList.toggle('open');
            btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        });

        menu.addEventListener('click', function(e){
            if(e.target.tagName === 'A'){
                menu.classList.remove('open');
                btn.setAttribute('aria-expanded','false');
            }
        });

        document.addEventListener('click', function(e){
            if(!menu.contains(e.target) && !btn.contains(e.target)){
                menu.classList.remove('open');
                btn.setAttribute('aria-expanded','false');
            }
        });

        document.addEventListener('keydown', function(e){
            if(e.key === 'Escape'){
                menu.classList.remove('open');
                btn.setAttribute('aria-expanded','false');
            }
        });
    }
})();
