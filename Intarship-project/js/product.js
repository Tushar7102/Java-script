function cardlist(data)
{
    // console.log(data)
    let store=data.map((el)=>singleCard(el.images,el.price,el.title,el.id))
     console.log(store)
    document.getElementById("product-sliders").innerHTML=store.join("")
}


function fetdata(){
    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then((data) => cardlist(data))
    .catch((err)=> console.log(err))
}
fetdata()



function singleCard(images,price,title,id) {
    let card = `
    <div class="col-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 mb-0 p-0 mt-5 marl position-relative top-0  left-0" id="${id}">
    <div class="products-images-main">
      <img src="${images[0]}">
      <div class="products-images">
      <img src="${images[1]}">
      </div>
      <span class="text-center product-buy col-11">
      <div class="row cart-row g-5 justify-content-between">
      <div class="col-5 product-wish"><i class="bi bi-plus-lg"></i>Add to Wishlist</div>
      <div class="col-5 product-cart"><i class="bi bi-plus-lg"></i> Add Card</div>
      </div>
      </span>
      </div>
      <div class="product-details mt-4">
      <p class="product-name">${title}</p>
      <p class="">$${price}</p></div>
     </div>
`
  return card
}