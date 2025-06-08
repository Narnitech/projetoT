document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');

    const handleScroll = () => {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Menu Hamburguer
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-item');

    // Função para abrir/fechar menu
    const toggleMenu = () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    };

    // Eventos do menu hamburguer
    hamburger.addEventListener('click', toggleMenu);

    // Fechar menu ao clicar em um link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.style.display = 'none';
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Fechar menu ao clicar fora
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            navLinks.style.display = 'none';
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });

    // Animação de fade para o menu hamburguer
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('animate');
    });

    // Adicionar classes de animação
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar elementos animáveis
    const animatableElements = document.querySelectorAll('.hero-content, .section-header, .plan-card, .portfolio-item');
    animatableElements.forEach(element => observer.observe(element));

    // Scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Adicionando scroll suave aos links de navegação
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                hamburger.classList.remove('active');
                navLinks.classList.remove('active');
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
