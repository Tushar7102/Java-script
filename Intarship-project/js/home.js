let suits=document.getElementById("Suits")
let linktag=document.getElementById("linktag")
suits.addEventListener("click",()=>{
    alert("Suits")
    linktag.href =`product.html?category=${encodeURIComponent("Suits")}`
})

let polo_shirt=document.getElementById("Polo-Shirt")
let linktag2=document.getElementById("linktag2")
polo_shirt.addEventListener("click",()=>{
    alert("polo_shirt")
    linktag2.href =`product.html?category=${encodeURIComponent("PoloShirts")}`
})