const symbols = [
    // Conjuntos Numéricos
    { symbol: 'ℕ', description: 'Números naturais (0, 1, 2, 3, ...)' },
    { symbol: 'ℤ', description: 'Números inteiros (..., -2, -1, 0, 1, 2, ...)' },
    { symbol: 'ℚ', description: 'Números racionais (frações a/b, b ≠ 0)' },
    { symbol: 'ℝ', description: 'Números reais (racionais e irracionais)' },
    { symbol: 'ℂ', description: 'Números complexos (a + bi, i = √-1)' },

    // Letras Gregas Comuns
    { symbol: 'α', description: 'Alfa (minúsculo) - ângulos ou variáveis' },
    { symbol: 'Α', description: 'Alfa (maiúsculo) - constantes ou entidades' },
    { symbol: 'β', description: 'Beta (minúsculo) - ângulos ou variáveis' },
    { symbol: 'γ', description: 'Gama (minúsculo) - física ou variável' },
    { symbol: 'Γ', description: 'Gama (maiúsculo) - função gama' },
    { symbol: 'δ', description: 'Delta (minúsculo) - diferenças pequenas' },
    { symbol: 'Δ', description: 'Delta (maiúsculo) - diferença ou discriminante' },
    { symbol: 'ε', description: 'Épsilon - quantidades pequenas em análise' },
    { symbol: 'θ', description: 'Teta - ângulos em trigonometria' },
    { symbol: 'λ', description: 'Lambda - autovalores ou parâmetro' },
    { symbol: 'π', description: 'Pi (≈ 3.14159) - constante de círculos' },
    { symbol: 'σ', description: 'Sigma (minúsculo) - desvio padrão' },
    { symbol: 'Σ', description: 'Sigma (maiúsculo) - somatório' },
    { symbol: 'φ', description: 'Phi - ângulos ou proporção áurea (≈ 1.618)' },
    { symbol: 'ω', description: 'Ômega (minúsculo) - frequência angular' },
    { symbol: 'Ω', description: 'Ômega (maiúsculo) - resistência ou conjuntos' },

    // Operações e Relações
    { symbol: '+', description: 'Mais - adição' },
    { symbol: '−', description: 'Menos - subtração ou inverso' },
    { symbol: '×', description: 'Vezes - multiplicação ou produto vetorial' },
    { symbol: '÷', description: 'Divisão - operação de divisão' },
    { symbol: '=', description: 'Igual - igualdade' },
    { symbol: '≠', description: 'Diferente - desigualdade' },
    { symbol: '<', description: 'Menor que - comparação' },
    { symbol: '>', description: 'Maior que - comparação' },
    { symbol: '≤', description: 'Menor ou igual - comparação com igualdade' },
    { symbol: '≥', description: 'Maior ou igual - comparação com igualdade' },
    { symbol: '≈', description: 'Aproximadamente igual - valores próximos' },
    { symbol: '∞', description: 'Infinito - valor ilimitado' },

    // Símbolos de Lógica e Conjuntos
    { symbol: '∈', description: 'Pertence a - elemento em um conjunto' },
    { symbol: '∉', description: 'Não pertence a - elemento fora de um conjunto' },
    { symbol: '⊂', description: 'Subconjunto - contido em outro conjunto' },
    { symbol: '⊆', description: 'Subconjunto ou igual - inclui igualdade' },
    { symbol: '∩', description: 'Interseção - elementos comuns' },
    { symbol: '∪', description: 'União - combinação de conjuntos' },
    { symbol: '∀', description: 'Para todo - quantificador universal' },
    { symbol: '∃', description: 'Existe - quantificador existencial' },
    { symbol: '⇒', description: 'Implica - se... então' },
    { symbol: '⇔', description: 'Se e somente se - equivalência lógica' },

    // Outros Símbolos Úteis
    { symbol: '√', description: 'Raiz quadrada - raiz de um número' },
    { symbol: '∫', description: 'Integral - integração em cálculo' },
    { symbol: '∂', description: 'Derivada parcial - cálculo multivariável' },
    { symbol: '∇', description: 'Nabla - gradiente, divergente ou rotacional' },
    { symbol: '∥', description: 'Paralelo ou norma - paralelismo ou magnitude' },
    { symbol: '⊥', description: 'Perpendicular - ângulo reto' },
    { symbol: '∑', description: 'Somatório - alternativa para Σ' }
];

const container = document.getElementById('symbol-container');
const message = document.getElementById('message');

// Gera os botões dinamicamente com descrição acima
symbols.forEach(item => {
    const symbolItem = document.createElement('div');
    symbolItem.className = 'symbol-item';

    const description = document.createElement('span');
    description.className = 'symbol-description';
    description.textContent = item.description;

    const btn = document.createElement('div');
    btn.className = 'symbol-btn';
    btn.textContent = item.symbol;

    symbolItem.appendChild(description);
    symbolItem.appendChild(btn);
    container.appendChild(symbolItem);

    // Evento de clique para copiar
    btn.addEventListener('click', () => {
        navigator.clipboard.writeText(item.symbol)
            .then(() => {
                message.style.display = 'block';
                setTimeout(() => {
                    message.style.display = 'none';
                }, 1500);
            })
            .catch(err => {
                console.error('Erro ao copiar: ', err);
            });
    });
});