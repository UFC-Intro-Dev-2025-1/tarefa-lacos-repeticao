// Tarefa Extra 3: Truthy e Falsy com while e do...while
// Descrição da atividade:
// 1. Crie um loop `while` que continue executando enquanto uma variável for "truthy".
// 2. Crie um loop `do...while` que execute pelo menos uma vez, mesmo que a variável seja "falsy".
// 3. Teste ambos os loops com diferentes valores para a variável, incluindo valores "truthy" e "falsy".

// Exemplo de uso do loop while com truthy e falsy
console.log("Loop while:");
let valor: any = 3; // Valor inicial "truthy"
while (valor) {
    console.log(`Valor atual: ${valor}`);
    valor--; // Decrementa o valor até se tornar "falsy"
}

// Exemplo de uso do loop do...while com truthy e falsy
console.log("\nLoop do...while:");
let outroValor: any = 0; // Valor inicial "falsy"
do {
    console.log(`Valor atual: ${outroValor}`);
    outroValor++; // Incrementa o valor
} while (outroValor < 3); // Continua enquanto a condição for "truthy"

// Comando para rodar este arquivo: npx tsx src/extra3.ts
// Comando para verificar o TypeScript: npx eslint src/extra3.ts
// Comando para testar todos os arquivos: npm test
