const notas = [10, 9.5, 8, 7, 6];

//const notasAtualizadas = notas.map(function(nota){
 //   return nota++;
//})


//quando precisa que retorne e guarda em outro array, usar o MAP
const notasAtualizadas = notas.map((nota) => nota++ >= 10 ? 10 : + 1);

console.log(notasAtualizadas);