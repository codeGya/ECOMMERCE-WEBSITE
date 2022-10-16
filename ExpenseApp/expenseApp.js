let formElement=document.getElementById("myform")

formElement.addEventListener("submit",displayBeforeRefreshing)

async function displayBeforeRefreshing(e)
{

    e.preventDefault()
    let price=document.getElementById('price').value
    let description=document.getElementById('description').value
    let quantity=document.getElementById('no.ofquantity').value
    let variety=document.getElementById('variety').value

    let user={
        Price:price,
        Description:description,
        Quantity:quantity,
        Variety:variety
    }
    console.log('i reached here')

    let waitForPostingToBackend=await axios.post('http://localhost:3500/post-user',user)

    document.getElementById('displayBeforeRefreshingPage').innerHTML=document.getElementById('displayBeforeRefreshingPage').innerHTML+`<li id=${waitForPostingToBackend.data.id}>Rs. Spend${waitForPostingToBackend.data.Price} On-${waitForPostingToBackend.data.Description},Quantity-${waitForPostingToBackend.data.Quantity} Details About Expenditure-${waitForPostingToBackend.data.Variety}<input type=button onclick=deleteUserBeforeRefreshing("${waitForPostingToBackend.data.id}") value=DELETE> <input type=button onclick=editUserDetailsBeforeRefreshingPage("${waitForPostingToBackend.data.id}","${waitForPostingToBackend.data.Price}","${waitForPostingToBackend.data.Description}","${waitForPostingToBackend.data.Quantity}","${waitForPostingToBackend.data.Variety}") value=EDIT></li>`
    //console.log(waitForPostingToBackend)
}
async function deleteUserBeforeRefreshing(a)
{
    await axios.delete(`http://localhost:3500/delete-user/${a}`)

    document.getElementById('displayBeforeRefreshingPage').removeChild(document.getElementById(a))


}

async function editUserDetailsBeforeRefreshingPage(a,b,c,d,e)
{
    await axios.delete(`http://localhost:3500/delete-user/${a}`)
    document.getElementById("displayBeforeRefreshingPage").removeChild(document.getElementById(a))

    document.getElementById("price").value=b
    document.getElementById("description").value=c
    document.getElementById("no.ofquantity").value=d
    document.getElementById("variety").value=e
    




}
document.addEventListener("DOMContentLoaded",displayAfterRefreshingPage)

async function displayAfterRefreshingPage()
{
    let getAllDataFromBackend=await axios.get('http://localhost:3500/get-user')
    //console.log(getAllDataFromBackend)
    let output=""

    for(let i=0;i<getAllDataFromBackend.data.length;i=i+1)
    {
        output=output+`<li id=${getAllDataFromBackend.data[i].id}>Rs Spend-${getAllDataFromBackend.data[i].Price} On-${getAllDataFromBackend.data[i].Description} ,No. of quantity-${getAllDataFromBackend.data[i].Quantity} on variety-${getAllDataFromBackend.data[i].Variety} <input type=button onclick=deleteAfterRefreshingPage("${getAllDataFromBackend.data[i].id}") value=DELETE> <input type=button onclick=editUserDetailsAfterRefreshingPage("${getAllDataFromBackend.data[i].id}","${getAllDataFromBackend.data[i].Price}","${getAllDataFromBackend.data[i].Description}","${getAllDataFromBackend.data[i].Quantity}","${getAllDataFromBackend.data[i].Variety}") value=EDIT></li>`
    }
    document.getElementById("dispalyAfterRefreshingPage").innerHTML=output





}
async function deleteAfterRefreshingPage(a){
    await axios.delete(`http://localhost:3500/delete-user/${a}`)

    document.getElementById("dispalyAfterRefreshingPage").removeChild(document.getElementById(a))


}
async function editUserDetailsAfterRefreshingPage(a,b,c,d,e)
{
    await axios.delete(`http://localhost:3500/delete-user/${a}`)
    document.getElementById("dispalyAfterRefreshingPage").removeChild(document.getElementById(a))

    document.getElementById("price").value=b
    document.getElementById("description").value=c
    document.getElementById("no.ofquantity").value=d
    document.getElementById("variety").value=e

}
