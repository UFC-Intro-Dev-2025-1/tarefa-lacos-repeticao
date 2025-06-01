import { execSync } from 'child_process';
import * as fs from 'fs';

let passed = 0;
const total = 4;

console.log(
    '\n\n---------------------------\n\n🔍 Iniciando verificação da atividade...\n'
);

// Valida o TypeScript
try {
    const outputLinter = execSync('npx eslint src/**/*.ts').toString();

    if (outputLinter.includes('problem') || outputLinter.includes('error')) {
        console.log('❌ Verifique o TypeScript no código.');
        console.log(outputLinter);
    } else console.log('✅ TypeScript validado!');
} catch (error) {
    console.log(
        '❌ Erros do ESLint:\n',
        error.stdout?.toString() ?? error.message
    );
}

// Teste 1: Verifica o main.ts
try {
    // testa se roda
    const saidaEsperada = 'Frida, você passou por média!\n'+
    'Pedro, você está na AF.\n'+
    'Marcos, infelizmente você está reprovado.';
    const output = execSync('npm run build').toString();
    if (output.includes(saidaEsperada)) {
        passed++;
        console.log('✅ main.ts: Saída em texto do código é a esperada.');
    } else {
        console.log(
            '❌ main.ts: Saída em texto do código não é a esperada: \nSer ou não ser, eis a questão.'
        );
    }
} catch (e) {
    console.log('❌ main.ts: Erro: ' + e.message);
}

// Teste 2: Verifica o extra1.ts
try {
    // testa primeiro se roda
    const saidaEsperadaExtra1 = 'Frida, você passou por média!\n'+
    'Pedro, você está na AF.\n'+
    'Marcos, infelizmente você está reprovado.';

    const output = execSync('npx tsx src/extra1.ts').toString();

    if (output.toString().includes(saidaEsperadaExtra1)) {
        passed++;
        console.log('✅ extra1.ts: Saída em texto do código é a esperada.');
    } else {
        console.log('❌ extra1.ts: Saída em texto do código não é a esperada.');
    }
} catch (e) {
    console.log('❌ extra1.ts: Erro: ' + e.message);
}

// Teste 3: Verifica o extra2.ts
try {
    // testa primeiro se roda
    const saidaEsperadaExtra2 = 
    "1. nome: Frida\n" +
    "2. turma: Turma1\n" +
    "3. idade: 20\n" +
    "4. nota: 85\n" +
    "5. endereco.rua: R. Benígno Bezerra\n" +
    "6. endereco.numero: 94\n" +
    "7. endereco.bairro: Campo Velho\n" +
    "8. endereco.cidade: Quixadá\n" +
    "9. endereco.estado: Ceará";

    const output = execSync('npx tsx src/extra2.ts').toString();
    if (output.toString().includes(saidaEsperadaExtra2)) {
        passed++;
        console.log('✅ extra2.ts: Saída em texto do código é a esperada.');
    } else {
        console.log('❌ extra2.ts: Saída em texto do código não é a esperada.');
    }
} catch (e) {
    console.log('❌ extra2.ts: Erro: ' + e.message);
}

// Teste 4: Verifica o extra3.ts
try {
    // testa se o arquivo possui símbolo de arrowfunction
    const elementoDoWhile = /do\s*\{[\s\S]*?\}\s*while\s*\(.*?\)/;
    const conteudo = fs.readFileSync('src/extra3.ts', 'utf-8');
    if (conteudo.search(elementoDoWhile)>=1) {
        passed++;
        console.log('✅ extra3.ts: Código com do...while.');
    } else {
        console.log('❌ extra3.ts: Código não usa do...while.');
    }

} catch (e) {
    console.log('❌ extra3.ts: Erro: ' + e.message);
}

// Resultado final
console.log(
    `\n\n🎯 Resultado: ${passed}/${total} testes passaram.` +
        '\n\n---------------------------\n\n'
);

// Código de saída para GitHub Classroom
process.exit(passed === total ? 0 : 1);
