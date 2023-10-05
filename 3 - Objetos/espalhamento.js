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

function ligaParaCliente(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

//ligaParaCliente(...cliente.telefone)


const encomenda = {
    destinatario:cliente.nome,
    ...cliente.enderecos[0]
    
}

console.log(encomenda)