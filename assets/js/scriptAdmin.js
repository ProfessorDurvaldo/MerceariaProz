// Create
const formCadastro = document.getElementById("formCadastro")

// 0 - Colocar tudo isso em um escutador de evento / função
formCadastro.onsubmit = (event) => {
    event.preventDefault()
    // 1 - Pegar os valores digitados na tela e colocar em variaveis
    const nomeProdutoDigitado = document.getElementById("nome").value
    const precoProdutoDigitado = Number(document.getElementById("preco").value)
    const categoriaProdutoDigitado = document.getElementById("categoria").value

    // 2 - Criar um objeto com esses valores
    const produto = {
        nome: nomeProdutoDigitado,
        preco: precoProdutoDigitado,
        categoria: categoriaProdutoDigitado
    }

    // 3 - Pegar os valores que estão no local storage (transformando eles em json)
    let produtosLocalStorage = JSON.parse(localStorage.getItem("Produtos"))
    
    if(!produtosLocalStorage) {
        produtosLocalStorage = []
    }

    // 4 - usar o .push para colocar os valores nesse json
    // Eu pego a variavel que eu criei no passo 3 e 
    // dou push usando a variavel do passo 2
    produtosLocalStorage.push(produto)

    // 5 - Salvar o novo json no local storage
    localStorage.setItem("Produtos", JSON.stringify(produtosLocalStorage))
}