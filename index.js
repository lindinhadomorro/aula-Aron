// O que são funções no JavaScript?
// Função são basicamente campos no código que tem alguma funcionalidade
// Um exemplo é, você quer fazer funções de calculos para  uma calculadora
// Cada operação precisa de uma função.

//Exemplo de função:
function somar(){
    const num1 = 10;
    const num2 = 20;

    const total = num1 + num2;

    console.log(`A soma ${num1} + ${num2} = ${total}`);
}

// Para podermos utilizar uma função no Javascript, precisamos chamar essa função
// No código
 
somar(); // Chamamos a função para executar o código acima
 

 // Nós temos 2 tipos de função, com parametros e sem parametros

 // Com parametros
 function somar2(num1, num2){
    const total = num1 + num2;

    console.log(`A soma ${num1} + ${num2} = ${total}`);
}


// Sem parametro
function somar3(){
    const num1 = 10;
    const num2 = 20;

    const total = num1 + num2;

    console.log(`A soma ${num1} + ${num2} = ${total}`);
}
