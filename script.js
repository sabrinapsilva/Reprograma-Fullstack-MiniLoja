window.onload = function () {
  alert("carregou");
  showProducts();
};


function showProducts(){

  // for (produto of getProducts()){
  //   let productDiv = document.getElementById("products");
  //   productDiv.innerHTML += "<div class='product'>" 
  //   + "<img src=" + produto["product"]["images"][0] + " class='product-img' />"
  //   + "<div class='text-name'>" 
  //   + "<h3 class='product-name'>$" + produto["product"]["name"] + "</h3>"
  //   + "</div>" + "<div class='text-price'>"
  //   + "<p class='product-price'>" 
  //   + Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })
  //   + "</p>" + "</div>" + "</div>"
  // }

//`template string`

function getProducts() {
  return data["items"];
}


  let productDiv = document.getElementById("products");
  productDiv.innerHTML = `
    ${getProducts().map((produto) => `
      <div class="product">
        <img src="${produto["product"]["images"][0]}" class="product-img" />
        <div class="text-name">
          <h3 class="product-name">${produto["product"]["name"]}</h3>
        </div>
        <div class="text-price">
          <p class="product-price">${Number(produto["product"]["price"]["value"]).toLocaleString('pt-br', { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</p>
        </div>
      </div>
      `).join("")}
      </div>
  `
}


const form = document.querySelector("#form-adiciona");
const adicionarProduto = document.querySelector("#adicionar-produto");
adicionarProduto.addEventListener('click', function(event){
event.preventDefault();
   
  let dados = {
      "product": {
        "name": form.nome.value,
        "images": [form.imagem.value],
        "price": {
            "value": form.preco.value,
        }
    }
  }

  data['items'].push(dados);
  showProducts();
});
