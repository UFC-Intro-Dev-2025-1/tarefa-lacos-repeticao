// Tarefa Extra 2: Testar for e for...in
// Descrição da atividade:
// 1. Crie um loop `for...in` que percorra as propriedades de um objeto e guarde um vetor de strings 'propriedade: valor".  
//    Exemplo: "nome: Frida", "turma: Turma1", etc.
//    Quando for no nível interno a string deve ser 'propriedade.propriedade: valor'. 
//      Exemplo: "endereco.rua: Rua das Flores", "disciplinas.nome: Matemática".
// 2. Agora com o vetor criado, faça um loop `for` simples que percorra toda o vetor exibindo cada item com um número e um ponto na frente. 
//    Exemplo: "1. nome: Frida"
//    Dicas: use propriedades.length para saber o tamanho do vetor
//           use propriedades.push(novoElemento) para inserir novo elemento 
// 3. Teste ambos os loops para garantir que funcionam corretamente.

// Adicione seu código aqui 👇 

const aluno = {
    nome: 'Frida',
    turma: 'Turma1',
    idade: 20,
    nota: 85,
    endereco: {
        rua: 'R. Benígno Bezerra',
        numero: 94,
        bairro: 'Campo Velho',
        cidade: 'Quixadá',
        estado: 'Ceará',
        cep: '63907-004'
    }
};

const propriedades: string[] = [];

// Adicione seu código aqui 👇 






// Saída esperada:
// 1. nome: Frida
// 2. turma: Turma1
// 3. idade: 20
// 4. nota: 85
// 5. endereco.rua: R. Benígno Bezerra
// 6. endereco.numero: 94
// 7. endereco.complemento: A
// 8. endereco.bairro: Campo Velho
// 9. endereco.cidade: Quixadá
// 10. endereco.estado: CE
// 11. endereco.cep: 63907-004


// Comando para rodar este arquivo: npx tsx src/extra2.ts
// Comando para verificar o TypeScript: npx eslint src/extra2.ts
// Comando para testar todos os arquivos: npm test
