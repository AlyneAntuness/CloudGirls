const nomes = ['Ana', 'Marcus', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => {
    return media[indice] < 7;
});

console.log(reprovados);