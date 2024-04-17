// let form=document.querySelector("#form");
// let t_body=document.querySelector("tbody");
// // console.log(t_body);

// let arr=[]
// form.addEventListener('submit',(e)=>{  
//     e.preventDefault(); 
//     let obj={
//     Name:document.getElementById('task').value,
//     Priority:document.getElementById('priority').value
//     }
//     // console.log(obj)
//     arr.push(obj)
//     console.log(arr)

//     t_body.innerText=null

//     for(let i=0;i<arr.length;i++){
//         const tr=document.createElement('tr');
//         const td1=document.createElement('td');
//         const td2=document.createElement('td');
//         const td3=document.createElement('td');
//         const btn=document.createElement('button')
//         btn.style.backgroundColor="red",
//         btn.style.border="none",
//         btn.style.color="white",
//         btn.style.padding="10px 15px"


//         td1.innerText=arr[i].Name
//         td2.innerText=arr[i].Priority
//         td3.append(btn)
//         btn.innerText="Delete"

    
//         tr.append(td1,td2,td3)
//         t_body.append(tr)

//         btn.addEventListener('click',()=>{
//             tr.remove();
//         })
        
//         t_body.addEventListener("click",()=>{
//             arr.splice(arr[i],i)
//         })
//     }
// })




let form=document.querySelector("#form");
let tbody=document.querySelector("tbody");
// console.log(t_body);

let arr=JSON.parse(localStorage.getItem("tododata")) || []
form.addEventListener('submit',(e)=>{  
    e.preventDefault(); 
    let obj={
    Name:document.getElementById('task').value,
    Priority:document.getElementById('priority').value
    }
    // console.log(obj)
    arr.push(obj)
    localStorage.setItem("tododata",JSON.stringify(arr))
    display()
})
window.addEventListener( "load", () => {
    display()
});
function display()
{
    tbody.innerHTML=null

    arr.forEach((el , i ) => {
        const tr=document.createElement('tr')
        const td1=document.createElement('td')
        const td2=document.createElement('td')
        const td3=document.createElement('td')

        td1.innerText=el.Name
        td2.innerText=el.Priority
        td3.innerText="Delete"

        tr.append(td1,td2,td3)
        tbody.append(tr)
       
    })
}