// Tarefa Extra 1: Testar bloco switch
// Descrição da atividade:
// 1. Crie uma função que recebe o nome do aluno e um número como parâmetro e utilize switch para verificar diferentes condições.
// 2. A função deve imprimir mensagens diferentes com base na nota e no nome fornecidos. Vejo como ficaria para caso fosse a aluna "Lana":
//     >70 - "Lana, você passou por média!"
//     >40 e <70 - "Lana, você está na AF."
//     >40 - "Lana, infelizmente você está reprovado."
// 3. Teste a função com diferentes valores para garantir que todas as condições sejam verificadas corretamente.

// Adicione seu código aqui 👇 

function verificarNotaSwitch(nome: string, nota: number): void {
    switch (true) {
        case nota > 70:
            console.log(`${nome}, você passou por média!`);
            break;
        case nota > 40 && nota <= 70:
            console.log(`${nome}, você está na AF.`);
            break;
        default:
            console.log(`${nome}, infelizmente você está reprovado.`);
    }
}

verificarNotaSwitch('Frida', 100); //Frida, você passou por média!
verificarNotaSwitch('Pedro', 65); //Pedro, você está na AF.
verificarNotaSwitch('Marcos', 33); // Marcos, infelizmente você está reprovado.

// Comando para rodar este arquivo: npx tsx src/extra1.ts
// Comando para verificar o TypeScript: npx eslint src/extra1.ts
// Comando para testar todos os arquivos: npm test
