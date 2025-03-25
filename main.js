// main.js
import { initSymbols } from './symbols.js';
import { initDeterminant } from './determinant.js';

function createNavigation(...titles) {
    const header = document.querySelector('header');
    const nav = document.createElement('nav');
    const ul = document.createElement('ul');

    titles.forEach((title, index) => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = title;
        a.href = `#${title.toLowerCase().replace(/\s+/g, '-')}`;
        if (index === 0) a.classList.add('active');
        li.appendChild(a);
        ul.appendChild(li);

        a.addEventListener('click', (e) => {
            e.preventDefault();
            ul.querySelectorAll('a').forEach(link => link.classList.remove('active'));
            a.classList.add('active');

            document.getElementById('symbols-section').style.display = 'none';
            document.getElementById('determinant-section').style.display = 'none';

            if (title === 'Símbolos Matemáticos') {
                document.getElementById('symbols-section').style.display = 'block';
                initSymbols();
            } else if (title === 'Determinante') {
                document.getElementById('determinant-section').style.display = 'block';
                initDeterminant();
            }
        });
    });

    nav.appendChild(ul);
    header.appendChild(nav);
}

createNavigation('Símbolos Matemáticos', 'Matrizes', 'Determinante');
initSymbols();