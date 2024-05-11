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
    <div class="col-3 mb-0 p-0 mt-5">
    <div class="products-images-main">
      <img src="${images[0]}">
      <div class="products-images">
      <img src="${images[1]}">
      </div>
      </div>
      <p class="product-name">${title}</p>
      <p class="text-center">$${price}</p>
     </div>
`
  return card
}




// ,
//       {
//         "id": 2,
//         "title": "Sand Linen Pique OverShirt",
//         "price": 550.00,
//         "brand": "Apple",
//         "category": "Shirt",
//         "images":[]
//       },      {
//         "id": 3,
//         "title": "Sand Linen Pique OverShirt",
//         "price": 550.00,
//         "brand": "Apple",
//         "category": "Shirt",
//         "images":"https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1707217307/STILL/M2R/M2R-614PP-M21793-31/M2R-614PP-M21793-31_10"
//       }
//       ,     
//        {
//         "id": 4,
//         "title": "Sand Linen Pique OverShirt",
//         "price": 550.00,
//         "brand": "Apple",
//         "category": "Shirt",
//         "images":"https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1704970940/STILL/M2R/M2R-695U-M21555-LT/M2R-695U-M21555-LT_10"
//       }

// "https://assets.paulsmith.com/paul-smith-products/f_webp,q_auto,ar_5:7,c_fill,w_614/v1709038979/MODEL/ECOM/M1R/M1R-399Y-M01764-60/M1R-399Y-M01764-60_1",