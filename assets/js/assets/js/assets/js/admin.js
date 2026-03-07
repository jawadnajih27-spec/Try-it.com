function addProduct(){

const name = document.getElementById("name").value
const price = document.getElementById("price").value
const image = document.getElementById("image").value

const product = {

name,
price,
image

}

console.log(product)

alert("Product ready to send to database")

  }
