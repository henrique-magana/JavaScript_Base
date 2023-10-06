const livros = require("./lista-livros.js")
const menorValor = require("./menorValor.js")


for(let atual = 0;atual < livros.length; atual++){
    let menor = menorValor(livros, atual)

    let livroAtual = livros[atual]
    console.log('Livro atual', livros[atual])
    console.log('Livro menor preco', livros[menor])
    let livroMenorPreco = livros[menor]

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
}

console.log(livros)