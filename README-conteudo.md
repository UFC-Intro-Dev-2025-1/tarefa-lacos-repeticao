# Estruturas de Controle e Iteração

<!-- toc -->

-   [Definindo Estruturas de Controle](#definindo-estruturas-de-controle)
    -   [Loop](#loop)
    -   [Truthy e Falsy](#truthy-e-falsy)
    -   [if...else](#ifelse)
    -   [for](#for)
    -   [for...in](#forin)
    -   [while](#while)
    -   [do...while](#dowhile)
    -   [switch](#switch)
-   [Referências](#referências)

## Definindo Estruturas de Controle

Um loop é uma estrutura que permite executar repetidamente um bloco de código enquanto uma condição é verdadeira. Exemplos incluem `for`, `while`, e `do...while`. [Leia mais](https://developer.mozilla.org/en-US/docs/Glossary/Loop).

### Truthy e Falsy

Valores em JavaScript podem ser considerados "truthy" ou "falsy" dependendo de como são avaliados em contextos booleanos.

#### Valores Falsy

Os valores abaixo são considerados "falsy", ou seja, são avaliados como `false` em contextos booleanos:

| Valor       | Descrição              |
| ----------- | ---------------------- |
| `false`     | O valor booleano falso |
| `0`         | O número zero          |
| `-0`        | O número negativo zero |
| `0n`        | O valor BigInt zero    |
| `""`        | String vazia           |
| `null`      | Valor nulo             |
| `undefined` | Valor indefinido       |
| `NaN`       | Not-a-Number           |

#### Valores Truthy

Qualquer valor que não seja "falsy" é considerado "truthy". Exemplos incluem:

-   Strings não vazias, como `"hello"`
-   Números diferentes de zero, como `42` ou `-42`
-   Objetos, como `{}` ou `[]`
-   Funções, como `function() {}`

Para verificar se um valor é "truthy" ou "falsy", você pode usar uma declaração `if`:

```typescript
if (value) {
    console.log('Este valor é truthy!');
} else {
    console.log('Este valor é falsy!');
}
```

## if...else

A condicional if é uma estrutura condicional que executa a afirmação, dentro do bloco, se determinada condição for verdadeira. Se for falsa, executa as afirmações dentro de else.

```typescript
if (condição1)
   instrução1
else if (condição2)
   instrução2
else if (condição3)
   instrução3
...
else
   instruçãoN
```

```typescript
const idade = 18;

if (idade < 18) {
    console.log('Você é menor de idade.');
} else if (idade === 18) {
    console.log('Você acabou de atingir a maioridade.');
} else {
    console.log('Você é maior de idade.');
}
```

## for

A instrução `for` cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

#### Exemplo de for em TypeScript

```typescript
for (let i = 0; i < 5; i++) {
    console.log(`O valor de i é: ${i}`);
}
```

Todas as três expressões na condição do loop for são opcionais. Por exemplo, no bloco de inicialização, não é necessário inicializar variáveis:

```typescript
var i = 0;
for (; i < 9; i++) {
    console.log(i);
    // more statements
}
```

Assim como ocorre no bloco de inicialização, a condição também é opcional. Se você está omitindo essa expressão, você deve certificar-se de quebrar o loop no corpo para não criar um loop infinito.

```typescript
for (var i = 0; ; i++) {
    console.log(i);
    if (i > 3) break;
    // more statements
}
```

Você também pode omitir todos os três blocos. Novamente, certifique-se de usar uma instrução break no final do loop e também modificar (incrementar) uma variável, para que a condição do break seja verdadeira em algum momento.

```typescript
var i = 0;

for (;;) {
    if (i > 3) break;
    console.log(i);
    i++;
}
```

### for...of

O loop for...of percorre objetos iterativos (incluindo Array, Map, Set, o objeto arguments e assim por diante), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

```typescript
let iterable = [10, 20, 30];

for (let value of iterable) {
    console.log(value);
}
// 10
// 20
// 30

// Ao invés de let, você pode usar const se você não for modificar a variável dentro do bloco.
```

#### Iterando sobre uma String

```typescript
let iterable = 'boo';

for (let value of iterable) {
    console.log(value);
}
// "b"
// "o"
// "o"
```

### for...in

O laço for...in interage sobre propriedades enumeradas de um objeto, na ordem original de inserção. O laço pode ser executado para cada propriedade distinta do objeto.

A função seguinte toma como argumento um objeto. O laço for...in iterage sobre todos as propriedades enumeráveis do objeto e retorna uma string com o nome das propriedades e seus respectivos valores.

```typescript
//Objeto
var obj = { a: 1, b: 2, c: 3 };

//Para prop (propriedade) in obj (objeto) faça
for (var prop in obj) {
    console.log('obj.' + prop + ' = ' + obj[prop]);
}

//A saída (output) deverá ser:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

### Diferença entre for...of e for...in

O loop for...in irá iterar sobre todas as propriedades enumeráveis de um objeto. A sintaxe do for...of é específica para coleções, ao invés de todos os objetos.
O exemplo a seguir mostra a diferença entre um loop for...of e um loop for...in.

```typescript
Object.prototype.objCustom = function () {};
Array.prototype.arrCustom = function () {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
    console.log(i); // escreve 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i of iterable) {
    console.log(i); // escreve 3, 5, 7
}
```

### forEach

O método forEach() do Array executa uma dada função em cada elemento de um array. Exemplo:

```typescript
const array1 = ['a', 'b', 'c'];

array1.forEach((element) => console.log(element));

// Expected output: "a"
// Expected output: "b"
// Expected output: "c"
```

O callback (a arrow function que é parâmetro do forEach) é invocado com três argumentos:

-   o valor do elemento
-   o índice do elemento
-   o array que está sendo percorrido

Podemos usar os 3:

```typescript
function logArrayElements(element, index, array) {
    console.log('a[' + index + '] = ' + element);
}
[2, 5, 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[2] = 9
```

### while

A declaração while cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina. O seguinte laço while itera enquanto n é menor que três.

```typescript
var n = 0;
var x = 0;

while (n < 3) {
    n++;
    x += n;
}
```

Cada iteração, o laço incrementa n e soma à x. Portanto, x e n assumem os seguintes valores:

-   Depois da primeira passagem: n = 1 e x = 1
-   Depois da segunda passagem: n = 2 e x = 3
-   Depois da terceira passagem: n = 3 e x = 6

Depois de completar a terceira passagem, a condição n < 3 não é mais verdadeira, então o laço termina.

### do...while

A declaração do...while cria um laço que executa uma declaração até que o teste da condição for falsa (false). A condição é avaliada depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.

No exemplo seguinte, o laço do...while soma pelo menos uma vez e executa novamente até i não ser menor que 5.

```typescript
var resultado = '';
var i = 0;
do {
    i += 1;
    resultado += i + ' ';
    console.log(resultado);
} while (i < 5);
```

### switch

A condicional switch avalia uma expressão, combinando o valor da expressão para um cláusula case, e executa as instruções associadas ao case.

```javascript
const expr = 'Papayas';
switch (expr) {
    case 'Oranges':
        console.log('Oranges are $0.59 a pound.');
        break;
    case 'Mangoes':
    case 'Papayas':
        console.log('Mangoes and papayas are $2.79 a pound.');
        // Expected output: "Mangoes and papayas are $2.79 a pound."
        break;
    default:
        console.log(`Sorry, we are out of ${expr}.`);
}
```

#### Exemplo: O que acontece se eu esquecer um break?

Se você esquecer um break então o script irá rodar a partir do caso onde o critério foi correspondido e irá rodar também o caso seguinte independentemente do critério ter sido correspondido ou não:

```javascript
var foo = 0;
switch (foo) {
    case -1:
        console.log('1 negativo');
        break;
    case 0: // foo é 0 então aqui o critério foi correspondido, então esse bloco vai rodar
        console.log(0);
    // NOTA: o break esquecido deveria estar aqui
    case 1: // nenhuma instrução break em 'case 0:' então essa instrução vai rodar também
        console.log(1);
        break; // o programa encontra esse break então não vai continuar para o 'case 2:'
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}
```

## Referências

-   [MDN Web Docs - Loop](https://developer.mozilla.org/en-US/docs/Glossary/Loop)
-   [MDN Web Docs - Truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
-   [MDN Web Docs - Falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)
-   [MDN Web Docs - if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)
-   [MDN Web Docs - for](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for)
-   [MDN Web Docs - for...in](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...in)
-   [MDN Web Docs - while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while)
-   [MDN Web Docs - do...while](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while)
-   [MDN Web Docs - switch](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch)
