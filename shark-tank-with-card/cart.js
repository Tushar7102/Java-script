
// use this for single product
{/* <img src=${image} alt="${name}">
       <div class="card-body">
        <h3 class="product-title">${title}</h3>
        <p class="product-description">${description}</p>
        <p class="product-price">${price}</p>
        <button>+</button>
        <p >Quantity ${quantity}</p>
        <button>-</button>
      </div> */}

    
      function Fetchcartdata(){
        fetch("https://shark-tank-json-server.onrender.com/cartpage").then((res)=>res.json())
        .then((data)=>cardlist(data))
        .catch((err)=>console.log(err))
      }
      Fetchcartdata()
     
      function cardlist(data){
         let totalcard=data.map((el)=>singlecard(el.id,el.image,el.price,el.category,el.title,el.founder,el.description))

         document.getElementById("product-container").innerHTML=totalcard
      }
      
      function singlecard(id,image,price,category,title,founder,description){
        let div=`
        <img src=${image} alt="${name}">
       <div class="card-body">
        <h3 class="product-title">${title}</h3>
        <p class="product-description">${category }</p>
        <p class="product-price">${price}</p>
        
      </div> 
        `
        return div
      }