// determinant.js
export function calculateDeterminant() {
    // Solicita a dimensão da matriz
    let dimension = prompt("Digite a dimensão da matriz (ex.: '2x2' ou '3x3'):");
    if (!dimension) return; // Cancela se o usuário não fornecer entrada

    const [rows, cols] = dimension.toLowerCase().split('x').map(Number);
    if (isNaN(rows) || isNaN(cols) || rows !== cols || (rows !== 2 && rows !== 3)) {
        alert("Por favor, insira uma matriz quadrada válida (2x2 ou 3x3).");
        return;
    }

    // Cria a matriz vazia
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            const value = prompt(`Digite o elemento da posição [${i + 1}][${j + 1}]:`);
            if (value === null) return; // Cancela se o usuário clicar em "Cancelar"
            matrix[i][j] = parseFloat(value);
            if (isNaN(matrix[i][j])) {
                alert("Por favor, insira apenas números válidos.");
                return;
            }
        }
    }

    // Calcula o determinante
    let det;
    if (rows === 2) {
        det = matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    } else if (rows === 3) {
        det = matrix[0][0] * (matrix[1][1] * matrix[2][2] - matrix[1][2] * matrix[2][1])
            - matrix[0][1] * (matrix[1][0] * matrix[2][2] - matrix[1][2] * matrix[2][0])
            + matrix[0][2] * (matrix[1][0] * matrix[2][1] - matrix[1][1] * matrix[2][0]);
    }

    // Exibe o resultado
    alert(`O determinante da matriz é: ${det}`);
}