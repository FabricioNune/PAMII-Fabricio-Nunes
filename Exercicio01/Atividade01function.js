
var variavel1 = 16
var variavel2 = 4

console.log("Será exibido o resultado das contas com os valores de:",variavel1,"e",variavel2)

// Soma
function soma(variavel1, variavel2) {
  return variavel1 + variavel2;
}

// Subtração
function subtracao(variavel1, variavel2) {
    return variavel1 - variavel2;
  }

// Multiplicação
function multiplicacao(variavel1, variavel2) {
    return variavel1 * variavel2;
  }


// Divisão
function divisao(variavel1, variavel2) {
    return variavel1 / variavel2;
  }


// Potência
function potencia(variavel1, variavel2) {
    return Math.pow(variavel1, variavel2) ;
  }


// Raiz quadrada
function raizquadrada(variavel1, variavel2) {
    return Math.sqrt(variavel1, variavel2) ;
  }

  console.log("A soma é igual a:",soma(variavel1, variavel2));
  console.log("A subtração é igual a:",subtracao(variavel1, variavel2));
  console.log("A multiplicação é igual a:",multiplicacao(variavel1, variavel2));
  console.log("A divisão é igual a:",divisao(variavel1, variavel2));
  console.log("A potência é igual a:",potencia(variavel1, variavel2));
  console.log("A raiz quadrada do 1º valor é igual a:",raizquadrada(variavel1));
  console.log("A raiz quadrada do 2º valor é igual a:",raizquadrada(variavel2));