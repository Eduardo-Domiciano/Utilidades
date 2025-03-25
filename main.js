// main.js
import { initSymbols } from './symbols.js';

// Função para criar a barra de navegação
function createNavigation(...titles) {
    const header = document.querySelector('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    titles.forEach((title, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = title;
        a.href = `#${title.toLowerCase().replace(/\s+/g, '-')}`; // Cria âncoras baseadas no título
        if (index === 0) a.classList.add('active'); // Define o primeiro item como ativo
        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);
    header.appendChild(nav);
}

// Inicializa a navegação com os títulos iniciais
createNavigation('Símbolos Matemáticos', 'Matrizes');

// Inicializa os símbolos
initSymbols();