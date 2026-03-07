async function loadProducts(){

const res = await fetch("data/products.json")

const products = await res.json()

const container = document.getElementById("product-list")

if(!container) return

products.forEach(p=>{

container.innerHTML+=`

<div class="product">

<img src="${p.image}">

<h3>${p.name}</h3>

<p>$${p.price}</p>

<a href="product.html?id=${p.id}">View</a>

<button onclick="addToCart(${p.id})">Add</button>

</div>

`

})

}


function addToCart(id){

let cart = JSON.parse(localStorage.getItem("cart")) || []

cart.push(id)

localStorage.setItem("cart",JSON.stringify(cart))

alert("Added to cart")

}


loadProducts()
