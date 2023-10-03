const alunos = ['Joao','Juliana', 'Ana', 'Caio']
const medias = [10,8,7.5, 9]

const listaDeAlunosEMedias = [alunos, medias]

function exibeNomeeNota(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){
        console.log(`${aluno} esta cadastrado`)

        // const alunos = listaDeAlunosEMedias[0]
        // const medias = listaDeAlunosEMedias[1]

        const [alunos,medias] = listaDeAlunosEMedias

        const indice = alunos.indexOf(aluno)


        const mediaDoAluno = medias[indice]

        console.log(`e sua nota eh ${mediaDoAluno}`)
    }else{
        console.log("Aluno nao encontrado")
    }
}

exibeNomeeNota('Caio')