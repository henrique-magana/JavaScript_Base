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


const chavesDoObejto = Object.keys(cliente)

console.log(chavesDoObejto)

if(!chavesDoObejto.includes("enderecos")){
    console.error("Error. eh necessario ter um enederco cadastrado")
}