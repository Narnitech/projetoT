// Portfolio items
const portfolioItems = [
    {
        title: 'Plataforma EAD',
        description: 'Sistema completo de ensino à distância com gestão de cursos',
        image: 'assets/ead.jpg',
        tech: ['React', 'Node.js', 'MongoDB']
    },
    {
        title: 'E-commerce',
        description: 'Loja virtual com catálogo e sistema de pagamentos',
        image: 'assets/ecommerce.jpg',
        tech: ['Vue.js', 'Python', 'PostgreSQL']
    },
    {
        title: 'Notícias e Podcast',
        description: 'Portal de notícias e podcast personalizado',
        image: 'assets/noticia.jpg',
        tech: ['React', 'Node.js', 'MongoDB']
    }
];

// Carregar cards do portfolio
if (document.querySelector('.portfolio-grid')) {
    portfolioItems.forEach(item => {
        const card = document.createElement('div');
        card.className = 'portfolio-item';
        card.innerHTML = `
            <div class="portfolio-image">
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <div class="portfolio-overlay-content">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                        <div class="tech-stack">
                            ${item.tech.map(tech => `<span>${tech}</span>`).join('')}
                        </div>
                        <a href="#" class="view-project" data-project-id="${item.title.toLowerCase().replace(/\s+/g, '-')}">Ver Projeto</a>
                    </div>
                </div>
            </div>
        `;
        document.querySelector('.portfolio-grid').appendChild(card);
    });
}

// Modal de detalhes do projeto
function showProjectDetails(projectId) {
    // Verificar se já existe um modal ativo
    const existingModal = document.querySelector('.project-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Criar o modal
    const modal = document.createElement('div');
    modal.className = 'project-modal';
    
    // Encontrar o projeto correspondente
    const project = portfolioItems.find(item => 
        item.title.toLowerCase().replace(/\s+/g, '-') === projectId
    );

    if (project) {
        modal.innerHTML = `
            <div class="modal-content">
                <span class="close-modal">&times;</span>
                <h2>${project.title}</h2>
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-details">
                    <div class="project-info">
                        <h3>Descrição</h3>
                        <p>${project.description}</p>
                    </div>
                    <div class="project-specs">
                        <h3>Tecnologias</h3>
                        <ul>
                            ${project.tech.map(tech => `<li>${tech}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;

        document.body.appendChild(modal);
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';

        // Adicionar eventos
        const closeBtn = modal.querySelector('.close-modal');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.remove();
                document.body.style.overflow = '';
            });
        }

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = '';
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                document.body.style.overflow = '';
            }
        });
    }
}

// Adicionar eventos aos botões de ver projeto
document.querySelectorAll('.view-project').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const projectId = button.getAttribute('data-project-id');
        if (projectId) {
            showProjectDetails(projectId);
        }
    });
});
