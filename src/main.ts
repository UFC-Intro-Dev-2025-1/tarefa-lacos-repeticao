// Tarefa: Testar blocos de if e else
// Descrição da atividade:
// 1. Crie uma função que recebe o nome do aluno e um número como parâmetro e utilize blocos de if e else para verificar diferentes condições.
// 2. A função deve imprimir mensagens diferentes com base na nota e no nome fornecidos. Vejo como ficaria para caso fosse a aluna "Lana":
//     >70 - "Lana, você passou por média!"
//     >40 e <70 - "Lana, você está na AF."
//     >40 - "Lana, infelizmente você está reprovado."
// 3. Teste a função com diferentes valores para garantir que todas as condições sejam verificadas corretamente.

// Adicione seu código aqui 👇 

function verificarNota(nome: string, nota: number): void {
    if (nota > 70) {
        console.log(`${nome}, você passou por média!`);
    } else if (nota > 40 && nota <= 70) {
        console.log(`${nome}, você está na AF.`);
    } else {
        console.log(`${nome}, infelizmente você está reprovado.`);
    }
}

verificarNota('Frida', 100); //Frida, você passou por média!
verificarNota('Pedro', 65); //Pedro, você está na AF.
verificarNota('Marcos', 33); // Marcos, infelizmente você está reprovado.

// npm run build
