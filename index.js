// index.js

// Espera o HTML carregar completamente antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {
    carregarProjetos();
});

async function carregarProjetos() {
    try {
        // Faz a leitura do arquivo JSON
        const response = await fetch('./projetos.json');
        const data = await response.json();

        // Seleciona o container principal onde tudo será inserido
        const container = document.getElementById('projetos-container');

        // Itera sobre as categorias
        for (const categoria in data.categorias) {
            const projetos = data.categorias[categoria];

            // Cria a div <div class="projectsGrid"> para agrupar os projetos desta categoria
            const gridDiv = document.createElement('div');
            gridDiv.className = 'projectsGrid';

            // Formata o nome da categoria (ex: "desenvolvimento" vira "Desenvolvimento")
            const categoriaFormatada = categoria.charAt(0).toUpperCase() + categoria.slice(1);

            // Cria o título <p class="projectsTitle">
            const titleP = document.createElement('p');
            titleP.className = 'projectsTitle';
            titleP.textContent = `Projetos de ${categoriaFormatada}`;
            gridDiv.appendChild(titleP); // Adiciona o título dentro do grid

            // Itera sobre cada projeto dentro da categoria atual
            projetos.forEach(projeto => {
                // Cria o <div class="projectCard">
                const cardDiv = document.createElement('div');
                cardDiv.className = 'projectCard';

                // Cria o ícone <img src="..." alt="arrow">
                const img = document.createElement('img');
                img.src = './pics/icons/arrow.ico';
                img.alt = 'arrow';

                // Cria o texto do projeto <p>
                const textP = document.createElement('p');
                textP.textContent = projeto.titulo;

                // Adiciona a imagem e o texto dentro do card
                cardDiv.appendChild(img);
                cardDiv.appendChild(textP);

                // Adiciona o evento de clique para redirecionar para a página do escopo
                // Passamos o slug via URL
                cardDiv.style.cursor = 'pointer'; // Muda o cursor do mouse para indicar que é clicável
                cardDiv.addEventListener('click', () => {
                    window.location.href = `./${projeto.slug}.html`;
                });

                // Adiciona o card pronto dentro do grid da categoria
                gridDiv.appendChild(cardDiv);
            });

            // Adiciona o grid completo da categoria ao container principal da página
            container.appendChild(gridDiv);
        }

    } catch (error) {
        console.error("Erro ao carregar o arquivo JSON:", error);
    }
}