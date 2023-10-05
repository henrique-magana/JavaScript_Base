const cliente ={
    nome: "Joao",
    idade: 24,
    email: "joao@gmail.com",
    telefone: ["1100000000", "122345689"]
}

cliente.enderecos =[
    {
        rua:"R. Joseph climber",
        numero: 1337,
        apartamento: true,
        complemento:"apto 934"
    }
]



for(let chave in cliente){

    let tipo = typeof cliente[chave]

    if(tipo !== 'object' && tipo !== 'function'){

        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }


}
