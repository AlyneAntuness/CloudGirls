const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

//add e ao mesmo tempo retirar da lista é o SPLICE e dentro do parametro
//a partir do indice 1 eu quero deletar duas posiçoes
//e depois add 'Rodrigo' no lugar que eu retirei
listaEstudantes.splice(1, 2, 'Rodrigo');



console.log(listaEstudantes);