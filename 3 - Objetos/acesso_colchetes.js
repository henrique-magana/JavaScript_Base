const cliente ={
    nome: "Andre",
    idade: 32,
    cpf: "123456789",
    email: "andre@gmail.com",
     
}




const chaves = ["nome","idade","cpf","email"]

chaves.forEach((chave) =>{
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`)
})