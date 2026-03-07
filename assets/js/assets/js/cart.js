async function loadCart(){

let cart = JSON.parse(localStorage.getItem("cart")) || []

const res = await fetch("data/products.json")

const products = await res.json()

const container = document.getElementById("cartItems")

let total = 0

cart.forEach(id=>{

const p = products.find(x=>x.id===id)

total += p.price

container.innerHTML+=`

<div>

${p.name} - $${p.price}

</div>

`

})

document.getElementById("total").innerText="Total: $"+total

}

loadCart()
