const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];
//o valor do primeiro array entra junto como valor do segundo array
//gera um unico array com os dois juntos

console.log(
    `a aluna da posição 1 da lista é: ${lista[0][1]}.
    a nota dessa aluna é ${lista[1][1]}`
);
//a primeira chave mostra 'lista' que é 'alunos' depois a posição
//da 'lista' que é Juliana
// a segunda chave mostra a segunda 'lista' que é 'medias' e depois
//a primeira posição que é '8'.
//Juliana tem nota 8

console.log(lista[0]);