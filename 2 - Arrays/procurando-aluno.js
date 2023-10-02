const alunos = ['Joao','Juliana', 'Ana', 'Caio']
const medias = [10,8,7.5, 9]

const listaDeAlunosEMedias = [alunos, medias]

function exibeNomeeNota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        console.log(`${aluno} esta cadastrado`)

        const indice = listaDeAlunosEMedias[0].indexOf(aluno)


        console.log(`e sua nota eh ${listaDeAlunosEMedias[1][indice]}`)
    }else{
        console.log("Aluno nao encontrado")
    }
}

exibeNomeeNota('Caio')