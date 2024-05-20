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
   <a href="description.html?title=${encodeURIComponent(title)}&images1=${encodeURIComponent(images[1])}&ima=${encodeURIComponent(images[2])}&images3=${encodeURIComponent(images[3])}&images4=${encodeURIComponent(images[0])}&images5=${encodeURIComponent(images[4])}&images6=${encodeURIComponent(images[5])}&images7=${encodeURIComponent(images[6])}&images8=${encodeURIComponent(images[7])}&price=${encodeURIComponent(price)}" class="text-decoration-none">
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
     <p class="product-price">$${price}</p></div>
    </div>
   </a>
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


