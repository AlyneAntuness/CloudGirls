const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

function exibeNomeENota(aluno){
    if (lista[0].includes(aluno)){//includes sempre retorna true ou false
        const [alunos, medias] = lista;//desestruturar a lista
        const indice = alunos.indexOf(aluno);//indexOf retorna o valor da posição
        const mediasAluno = medias[indice];
        console.log(`${aluno} tem a média ${mediasAluno}`);
    } else{
        console.log('Estudante não existe na lista');
    }
}

exibeNomeENota('Juliana');
exibeNomeENota('Vine');