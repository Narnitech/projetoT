console.log('Script de JavaScript carregado');
document.addEventListener('DOMContentLoaded', () => {
    console.log('Script carregado');
    
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    console.log('Navbar encontrado:', !!navbar);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    console.log('Hamburger encontrado:', !!hamburger);
    console.log('NavLinks encontrado:', !!navLinks);
    
    if (!hamburger || !navLinks) {
        console.error('Elementos do menu não encontrados');
        return;
    }
    
    // Verificar se os elementos estão no DOM
    console.log('Hamburger no DOM:', hamburger);
    console.log('NavLinks no DOM:', navLinks);

    if (!hamburger || !navLinks) {
        console.error('Elementos do menu não encontrados');
        return;
    }

    // Adicionar evento de click no hamburger
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Impedir propagação do evento
        e.preventDefault(); // Prevenir comportamento padrão
        console.log('Hamburger clicado');
        
        // Remover active de todos os outros menus
        document.querySelectorAll('.hamburger').forEach(h => {
            if (h !== hamburger) {
                h.classList.remove('active');
            }
        });
        document.querySelectorAll('.nav-links').forEach(n => {
            if (n !== navLinks) {
                n.classList.remove('active');
            }
        });
        
        // Alternar classes do menu atual
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Fechar menu quando clicar em links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevenir comportamento padrão
            const href = link.getAttribute('href');
            
            // Se for link externo, permitir redirecionamento
            if (href && href.includes('.html')) {
                window.location.href = href;
            } else {
                // Se for link interno, fazer scroll
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
            
            // Fechar menu
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Fechar menu quando clicar fora
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            console.log('Clicou fora do menu');
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Fechar menu quando redimensionar a tela
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Adicionar listener para tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const href = item.getAttribute('href');
            console.log('Link clicado:', href);
            
            // Se é um link para outra página
            if (href.includes('.html')) {
                // Fechar menu mobile se estiver aberto
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
                // Deixar o navegador lidar com o redirecionamento
                return;
            }

            // Se é um link interno (com #)
            e.preventDefault();
            const targetElement = document.querySelector(href);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Fechar menu mobile se estiver aberto
                if (hamburger) {
                    hamburger.classList.remove('active');
                }
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Hover effects
    const addHoverEffect = (elements, className) => {
        elements.forEach(element => {
            element.addEventListener('mouseenter', () => {
                element.classList.add(className);
            });
            element.addEventListener('mouseleave', () => {
                element.classList.remove(className);
            });
        });
    };

    // Navbar hover effects
    addHoverEffect(document.querySelectorAll('.nav-item'), 'hovered');
    
    // Logo hover effect
    const logo = document.querySelector('.logo');
    if (logo) {
        addHoverEffect([logo], 'hovered');
    }

    // Plan cards hover effect
    addHoverEffect(document.querySelectorAll('.plan-card'), 'hovered');

    // About image hover effect
    const aboutImage = document.querySelector('.about-image');
    if (aboutImage) {
        addHoverEffect([aboutImage], 'hovered');
    }

    // Tech items hover effect
    addHoverEffect(document.querySelectorAll('.tech-item'), 'hovered');

    // Story cards hover effect
    addHoverEffect(document.querySelectorAll('.story-card'), 'hovered');

    // Buttons hover effect
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });
});
