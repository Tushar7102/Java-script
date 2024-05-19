let productdata=[]
let productdata2=[]
function cardlist(data)
{
    // console.log(data)
    let store=data.map((el)=>singleCard(el.images,el.price,el.title,el.id))
    // store === cardlist(filterdata)
    //  console.log(store)
    document.getElementById("product-sliders").innerHTML=store.join("")
}


function fetdata(){
    fetch("http://localhost:3000/products")
    .then(response => response.json())
    .then((data)=>{
      productdata=data
      productdata2=data
      cardlist(data)
    })
    .catch((err)=> console.log(err))
}

fetdata()


function singleCard(images,price,title,id) {
    let card = `
    
     <div class="card-list">

    <div class=" mb-0 p-0 mt-4 marl position-relative top-0  left-0" id="${id}">
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
              </div>
`
  return card
}

let dataformhomesuits=new URLSearchParams(window.location.search)

window.addEventListener("load",()=>{
  setTimeout(()=>{
    let filterdata=productdata.filter((el)=>el.category === dataformhomesuits.get("category"))
    console.log(filterdata)
    if(dataformhomesuits.get("category")=="Suits")
      {
        cardlist(filterdata)
      }

   else if(dataformhomesuits.get("category")==="PoloShirts"){
    cardlist(filterdata)
   }
   else if(dataformhomesuits.get("category")==="Shirt")
    {
      cardlist(filterdata)
    }
      else{
        fetdata()
      }
  },50)
})
