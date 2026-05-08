# Meu Currículo - Portfólio Web

Bem-vindo ao repositório do meu currículo e portfólio de projetos web! Este projeto foi desenvolvido para compartilhar um pouco sobre mim, minhas habilidades técnicas e demonstrar meus projetos pessoais e acadêmicos.

## 👨‍💻 Sobre o Autor

**Matheus Lucas**  
*Desenvolvedor Full Stack*  

Sou um entusiasta da tecnologia e inovação, com experiência em diversas linguagens de programação. Estou sempre buscando aprender novas habilidades para me manter atualizado no mercado. Sou dedicado, proativo e gosto de trabalhar em equipe para alcançar os melhores resultados.

### 🌐 Minhas Redes
- [LinkedIn](https://www.linkedin.com/in/matheus-lucas-se/)
- [GitHub](https://github.com/Matheus-ls1)

---

## 🚀 Funcionalidades

- **Apresentação Inicial (Modal):** Uma tela de boas-vindas com efeito "blur" que recepciona os visitantes do site.
- **Perfil e Resumo Profissional:** Seção detalhando meu perfil, idiomas e um resumo "Sobre Mim".
- **Exibição de Habilidades:** Ícones de tecnologias com "tooltips" (dicas de contexto) customizadas exibindo o nome das ferramentas que utilizo.
- **Carregamento Dinâmico de Projetos:** Os projetos são lidos a partir de um arquivo `projetos.json` utilizando a Fetch API do JavaScript e são automaticamente separados e renderizados por categorias na tela.
- **Redirecionamento Inteligente:** Ao clicar no card de um projeto, o usuário é redirecionado para a página de detalhes (`escopo.html`) com o parâmetro respectivo na URL (`?projeto=slug`).

---

## 🛠 Tecnologias Utilizadas

Este projeto foi construído utilizando as seguintes linguagens e tecnologias base:

- **HTML5:** Estruturação semântica de todo o site.
- **CSS3:** Estilização visual, organização de layouts (Flexbox/Grid), tooltips e efeitos.
- **JavaScript (ES6+):** Manipulação de DOM, consumo de dados assíncronos (`async/await`) com Fetch API.
- **JSON:** Armazenamento estruturado dos dados dos projetos (`projetos.json`).

### Linguagens e Ferramentas do meu Stack:
- Java
- PHP
- MySQL
- Git
- Python
- JavaScript, HTML & CSS

---

## ⚙️ Como executar o projeto localmente

Como o projeto faz requisições locais (usando o `fetch` para ler o arquivo `projetos.json`), é necessário executá-lo através de um servidor local para evitar bloqueios de CORS pelo navegador.

1. Clone este repositório na sua máquina.
2. Abra a pasta do projeto no VS Code (ou no seu editor de preferência).
3. Utilize uma extensão como o **Live Server** para rodar a aplicação.
4. O navegador abrirá automaticamente a página `index.html`.

---

> *Estou em constante evolução e sempre aberto a networking e feedbacks!*