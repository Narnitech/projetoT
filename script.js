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

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            console.log('Hamburger clicado');
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
                console.log('Clicou fora do menu');
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
            }
        });
    } else {
        console.log('Elementos do menu não encontrados');
    }

    // Navegação para links
    const navItems = document.querySelectorAll('.nav-item');
    console.log('Número de links encontrados:', navItems.length);
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
