// Tarefa Extra 2: Testar for e for...in
// Descrição da atividade:
// 1. Crie um loop `for` que percorra números de 1 a 10 e imprima cada número no console.
// 2. Crie um loop `for...in` que percorra as propriedades de um objeto e imprima o nome da propriedade e seu valor.
// 3. Teste ambos os loops para garantir que funcionam corretamente.

// Adicione seu código aqui 👇 

// Exemplo de uso do loop for
console.log("Loop for:");
for (let i = 1; i <= 10; i++) {
    console.log(`Número: ${i}`);
}

// Exemplo de uso do loop for...in
console.log("\nLoop for...in:");
const aluno = {
    nome: "Lana",
    idade: 20,
    nota: 85
};

for (const propriedade in aluno) {
    console.log(`${propriedade}: ${aluno[propriedade as keyof typeof aluno]}`);
}

// Comando para rodar este arquivo: npx tsx src/extra2.ts
// Comando para verificar o TypeScript: npx eslint src/extra2.ts
// Comando para testar todos os arquivos: npm test
