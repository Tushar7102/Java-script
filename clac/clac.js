const keys=document.querySelectorAll("#keyboard > div");
// console.log(keys)
let bag=""
let res=0;
for(let i=0;i<keys.length;i++){
 
  keys[i].addEventListener("click", (event) => {
    let currentkey=event.target.innerText
    // console.log(currentkey)
    if(currentkey =="C")
    {
      bag=""
      document.querySelector("#display").innerText="";
    }
    else if(currentkey == "=")
    {
      let res=eval(bag)
      document.querySelector("#display").innerText=res;
    }
    else
    {
      bag =bag+ currentkey
      console.log(bag)
      res=bag
      document.querySelector("#display").innerText = res
    }
  })
}