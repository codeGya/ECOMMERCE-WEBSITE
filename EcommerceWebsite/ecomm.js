document.addEventListener('DOMContentLoaded',dispalyAfterRefreshingPage)

async function dispalyAfterRefreshingPage()
{
    //e.preventDefault()
    let waitForGettingDataFromBackend=await axios.get('http://localhost:3500/get-user-data')
    let dataFromBackend=waitForGettingDataFromBackend.data
    //console.log(dataFromBackend)
    let elementToPresentData=document.getElementById('gadgets')
    let output=""

    for(let i=0;i<dataFromBackend.length;i=i+1)
    {
        output=output+
        
        `<div ><h4>${dataFromBackend[i].title}</h4><img src=${dataFromBackend[i].imageurl}>
           <label for=shoes>Rs-${dataFromBackend[i].price}</label><button id=${dataFromBackend[i].id} type=button>ADD TO CART</button>
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
    
    //document.getElementById('list').innerHTML=document.getElementById('list').innerHTML+`<li>Price-${waitForGettingData.data.price} Title-${waitForGettingData.data.title}<img src=${waitForGettingData.data.imageurl}></li>`
    
    
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

document.getElementById("cart").addEventListener('click',displayingCartButton)

function displayingCartButton()
{
    document.getElementById("cart").classList.toggle('active')
    document.getElementById("nav").classList.toggle('active')



}

async function addToCart(a,b,c,d)
{
    const user={
        id:a,
        title:b,
        imageurl:c,
        price:d

    }
    const waitForPostingToCartDataBase=await axios.post(`http://localhost:3500/post-cart`,user)
    console.log(waitForPostingToCartDataBase)
}

document.getElementById('cart').addEventListener('click',getDataFromBackend)

async function  getDataFromBackend()
{
    let waitForGettingDataOfCart=await axios.get('http://localhost:3500/get-user')
    //console.log(waitForGettingDataOfCart.data)
    //document.getElementById('list').innerHTML=`<li>Price-${waitForGettingDataOfCart.data.price} Title-${waitForGettingDataOfCart.data.title}</li>`
    let output=""
    for(let i=0;i<waitForGettingDataOfCart.data.length;i=i+1)
    {
       output=output+`<li>Price-${waitForGettingDataOfCart.data[i].price} Title-${waitForGettingDataOfCart.data[i].title}<img src=${waitForGettingDataOfCart.data[i].imageurl}></li>`

    }
    document.getElementById('list').innerHTML=output

}
document.getElementById('gadgets').addEventListener('click',storeDataInCartDataBase)

async function storeDataInCartDataBase(e)
{
    const whichButtonGotClicked=e.target.id
   const waitForGettingData=await axios.get(`http://localhost:3500/get-user/${whichButtonGotClicked}`)
   //console.log(waitForGettingData)

    //await axios.get()
    const user={
        id:waitForGettingData.data.id,
        imageurl:waitForGettingData.data.imageurl,
        price:waitForGettingData.data.price,
        title:waitForGettingData.data.title


    }

    const waitForPostingDataToCartDataBase=await axios.post('http://localhost:3500/post-cart',user)
}




