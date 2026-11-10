const produtos = JSON.parse(localStorage.getItem("Produtos")) || []
const lista = document.getElementById("lista-produtos")
const escapar = valor => String(valor).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" })[c])
const moeda = valor => Number(valor).toLocaleString("pt-BR", { style: "currency", currency: "BRL" })

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
