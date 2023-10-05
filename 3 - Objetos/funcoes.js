
const cliente ={
    nome: "Joao",
    idade: 24,
    email: "joao@gmail.com",
    telefone: ["1111111111", "222222222"],
    saldo: 200,
    efetuaPagameto: function(valor){
        if(valor > this.saldo){
            console.log("Erro, saldo insuficiente")
        }else{
            this.saldo-= valor
            console.log(`Pagamento realizado, novo saldo ${this.saldo}`)
        }
    }
}


cliente.efetuaPagameto(100)