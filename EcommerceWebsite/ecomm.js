document.addEventListener('DOMContentLoaded',dispalyAfterRefreshingPage)

async function dispalyAfterRefreshingPage()
{
    //e.preventDefault()
    let waitForGettingDataFromBackend=await axios.get('http://localhost:3500/get-user')
    let dataFromBackend=waitForGettingDataFromBackend.data
    console.log(dataFromBackend)
    let elementToPresentData=document.getElementById('gadgets')
    let output=""

    for(let i=0;i<dataFromBackend.length;i=i+1)
    {
        output=output+
        
        `<div ><h4>${dataFromBackend[i].title}</h4><img src=${dataFromBackend[i].imageurl}>
           <label for=shoes>Rs-${dataFromBackend[i].price}</label><button id=${dataFromBackend[i].id} type=button  >ADD TO CART</button>
           </div>`
        
         
        
    
        
    }
    
            


    



    
    elementToPresentData.innerHTML=elementToPresentData.innerHTML+output
    

}
document.getElementById('gadgets').addEventListener('click',cartItems)
async function cartItems(e)
{
    //console.log(e.target.id)
    const whichButtonGotClicked=e.target.id
    

    
    //displayCartProducts('hey i am added to cart')
    //console.log(e.target.id)
    //const waitForGettingData=await axios.get(`http://localhost:3500/get-user/${whichButtonGotClicked}`)
    //displayCartProducts(whichButtonGotClicked)
    let waitForGettingData=await axios.get(`http://localhost:3500/get-user/${whichButtonGotClicked}`)
    //console.log(waitForGettingData)
    createNotification(waitForGettingData.data.title)
    
    document.getElementById('items').innerHTML=document.getElementById('items').innerHTML+`<li>Price-${waitForGettingData.data.price} Title-${waitForGettingData.data.title}</li>`
    
    
}

// document.getElementById('cart').addEventListener('click',displayCartProducts)

// async function displayCartProducts(a)
// {
//     //if(a.id===)
//     //console.log('hey i am in cart section')
    
    
// }
//setTimeout(()=>{document.getElementById('notification').innerText='ADDED TO CART'},0)

function createNotification(a)
{
    const createElement=document.createElement('div')
    createElement.classList.add('toast')
    createElement.innerText=`${a} ADDED TO CART`

    document.getElementById('notif').appendChild(createElement)

    setTimeout(()=>{
        createElement.remove()

    },3000)
}





