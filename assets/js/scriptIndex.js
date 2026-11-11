const produtos = JSON.parse(localStorage.getItem("Produtos")) || []
const lista = document.getElementById("lista-produtos")
const escapar = valor => String(valor).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[c])
const moeda = valor => Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

// Escreve na tela => componente
function escreveNaTela(produtos) {
    lista.innerHTML = produtos.length ? produtos.map(produto => `
        <div class="col-12 col-sm-6 col-lg-4 col-xl-3">
            <article class="card product-card">
                <div class="product-icon" aria-hidden="true">M</div>
                <div class="card-body">
                    <span class="badge rounded-pill category-badge mb-3">${escapar(produto.categoria)}</span>
                    <h2 class="h5 fw-bold mb-3">${escapar(produto.nome)}</h2>
                    <p class="product-price mb-0">${moeda(produto.preco)}</p>
                </div>
            </article>
        </div>
    `).join("") : '<div class="col-12"><div class="empty-state">Nenhum produto cadastrado ainda.</div></div>'
}
escreveNaTela(produtos)

// passo 1 pegar o select do html
const filtroCategoria = document.getElementById("filtroCategoria")
// passo 2 pegar as categorias e transforma-las em unicas
const categorias = produtos.map((produto) => produto.categoria)
const categoriasUnicas = [...new Set(categorias)]

// passo 3 escrever as categorias na tela
filtroCategoria.innerHTML += categoriasUnicas.map(categoria => `
    <option>${categoria}</option>
`).join("")


filtroCategoria.addEventListener("change", () =>{
    const categoriaSelecionada = filtroCategoria.value
    let produtosFiltrados = []

    if (categoriaSelecionada == "Todas") {
        produtosFiltrados = produtos
    } else {
        produtosFiltrados = produtos.filter((produto) => 
            produto.categoria == categoriaSelecionada
        )
    }
    console.log(produtosFiltrados)
    escreveNaTela(produtosFiltrados)
})