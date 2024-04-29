const notas = [10, 8.5, 5, 6.5, 8, 7.5];

//let indice = 0; primeira expressão: executada apenas umas vez
//indice < notas.length; segunda expressão: condição de execução( vai continuar repetindo enquanto for verdadeiro)
//indice++ terceira expressão: executada sempre ao final do bloco 
for (let indice = 0; indice < notas.length; indice++){
    console.log(indice, notas[indice]);
}
