// determinant.js
export function initDeterminant() {
    const section = document.getElementById('determinant-section');
    const dimensionInputDiv = document.getElementById('dimension-input');
    const setDimensionBtn = document.getElementById('set-dimension-btn');
    const matrixInputs = document.getElementById('matrix-inputs');
    const calculateBtn = document.getElementById('calculate-btn');
    const result = document.getElementById('result');
    const determinantValue = document.getElementById('determinant-value');

    let dimensionField = null;

    // Função para gerar os campos de entrada da matriz
    function generateMatrixInputs(rows) {
        matrixInputs.innerHTML = ''; // Limpa os campos anteriores
        for (let i = 0; i < rows; i++) {
            const row = document.createElement('div');
            row.className = 'matrix-row';
            for (let j = 0; j < rows; j++) {
                const input = document.createElement('input');
                input.type = 'number';
                input.className = 'matrix-input';
                input.placeholder = `[${i + 1}][${j + 1}]`;
                row.appendChild(input);
            }
            matrixInputs.appendChild(row);
        }
        matrixInputs.style.display = 'block';
        calculateBtn.style.display = 'block';
        result.style.display = 'none'; // Esconde o resultado ao gerar novos campos
    }

    // Evento para definir a dimensão
    setDimensionBtn.addEventListener('click', () => {
        if (dimensionField) dimensionField.remove();

        dimensionField = document.createElement('input');
        dimensionField.className = 'dimension-field';
        dimensionField.placeholder = 'Ex.: 3x3';
        dimensionInputDiv.insertBefore(dimensionField, setDimensionBtn);

        dimensionField.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') processDimension();
        });
        dimensionField.addEventListener('blur', processDimension);

        dimensionField.focus();
    });

    // Função para processar a dimensão inserida
    function processDimension() {
        const dimension = dimensionField.value.trim();
        const [rows, cols] = dimension.toLowerCase().split('x').map(Number);

        if (isNaN(rows) || isNaN(cols) || rows !== cols || rows < 1) {
            alert('Por favor, insira uma matriz quadrada válida (ex.: 2x2, 3x3, 4x4).');
            dimensionField.value = '';
            return;
        }

        generateMatrixInputs(rows);
        dimensionField.remove();
    }

    // Função para calcular o determinante (expansão por cofatores)
    function calculateDeterminant(matrix) {
        const n = matrix.length;

        if (n === 1) return matrix[0][0];
        if (n === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];

        let det = 0;
        for (let j = 0; j < n; j++) {
            det += matrix[0][j] * cofactor(matrix, 0, j);
        }
        return det;
    }

    // Função para calcular o cofator
    function cofactor(matrix, row, col) {
        return Math.pow(-1, row + col) * calculateDeterminant(getMinor(matrix, row, col));
    }

    // Função para obter a matriz menor (excluindo uma linha e coluna)
    function getMinor(matrix, row, col) {
        const n = matrix.length;
        const minor = [];
        for (let i = 0; i < n; i++) {
            if (i === row) continue;
            const minorRow = [];
            for (let j = 0; j < n; j++) {
                if (j === col) continue;
                minorRow.push(matrix[i][j]);
            }
            minor.push(minorRow);
        }
        return minor;
    }

    // Evento para calcular o determinante
    calculateBtn.addEventListener('click', () => {
        const inputs = matrixInputs.querySelectorAll('.matrix-input');
        const rows = Math.sqrt(inputs.length); // Calcula o número de linhas
        const matrix = [];

        // Preenche a matriz com os valores dos inputs
        for (let i = 0; i < rows; i++) {
            matrix[i] = [];
            for (let j = 0; j < rows; j++) {
                const value = parseFloat(inputs[i * rows + j].value);
                if (isNaN(value)) {
                    alert('Por favor, preencha todos os campos com números válidos.');
                    return;
                }
                matrix[i][j] = value;
            }
        }

        // Calcula o determinante
        const det = calculateDeterminant(matrix);

        // Exibe o resultado
        determinantValue.textContent = det;
        result.style.display = 'block';
    });
}