
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













// lista.innerhtml = produtos





//innerhtml imprimi e muda o conteudo
// ul.innerHTML

// ul.innerHTML = 'outracoisa'

// lista.map((produto)=> (
//     lista.innerHTML =+'
//      <div class="item-nome">${produto.nome}</div>
//      '
// )