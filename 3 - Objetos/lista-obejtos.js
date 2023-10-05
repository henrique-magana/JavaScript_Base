const cliente ={
    nome: "Joao",
    idade: 24,
    email: "joao@gmail.com",
    telefone: ["1111111111", "222222222"]
}


cliente.enderecos =[{
    rua: "reboujo",
    numero: 250,
    apto: 51
},
]

cliente.enderecos.push({
    rua: "Nova Jeru",
    numero: 115,
    apto:12
})

console.log(cliente.enderecos[1])

const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.numero === true
)

console.log(listaApenasApartamentos)
