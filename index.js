
const produtos = [
{
    nome: "Notebook",
    categoria: "Eletrônico"
},
{
    nome: "Camiseta",
    categoria: "Roupa"
},
{
    nome: "Liquidificador",
    categoria: "Casa"
},
{
    nome: "Fone de ouvido",
    categoria: "Eletrônico"
},
{
    nome: "Sofá",
    categoria: "Casa"
}
];


const lista = document.getElementById('lista');

for(let i = 0; i < produtos.length; i++) {
    lista.innerHTML += `
<li>
        <div class="item-nome">${produtos[i].nome}</div>
        <div class="item-categoria">${produtos[i].categoria}</div>
      </li>  
      `;

}


const input = document.getElementById('inputBusca');
// const produtosfiltrados = document.querySelectorAll("produtos");

input.addEventListener('input', (event) => {
    const produtosFiltrados = produtos.filter(produto => {
        const valordoInput = event.target.value.toLowerCase();
        const nomeDoProduto = produto.nome.toLowerCase();
        const categoria = produto.categoria.toLowerCase();
        
        return nomeDoProduto.startsWith(valordoInput) || categoria.startsWith(valordoInput)
    });

    lista.innerHTML = '';
  produtosFiltrados.map(produto => {
   lista.innerHTML += `
      <li>
        <div class="item-nome">${produto.nome}</div>
        <div class="item-categoria">${produto.categoria}</div>
      </li>  
`

});

     });
    


















// input.addEventListener('input', (event) => {
// console.log(event.target.value)
// } )

// const Produtos = event.target.value.toLowerCase()

// produtos.forEach((item) => {

// } )









// lista.innerhtml = produtos





//innerhtml imprimi e muda o conteudo
// ul.innerHTML

// ul.innerHTML = 'outracoisa'

// lista.map((produto)=> (
//     lista.innerHTML =+'
//      <div class="item-nome">${produto.nome}</div>
//      '
// )

