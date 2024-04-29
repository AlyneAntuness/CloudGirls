const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 
'João', 'João'];

//Set armazena elementos unicos, ele não repete elementos
//Set não é um array
//const nomesAtualizados = new Set(nomes);

const listaNomesAtualizados = [...new Set(nomes)];


//console.log(nomesAtualizados);
console.log(listaNomesAtualizados);