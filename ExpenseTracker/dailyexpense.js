//const { request } = require("express")

document.getElementById('expense').addEventListener('submit',saveDailyExpensesToBackend)

//axios.defaults.headers.common['header1'] = localStorage.getItem('token')

async function saveDailyExpensesToBackend(e)
{
    e.preventDefault()
    const  spend=document.getElementById('spend').value
    const description=document.getElementById('description').value
    const variety=document.getElementById('variety').value
    const expenses={
        spend:spend,
        description:description,
        variety:variety
    }

    let config = {
        headers: {
            header1:localStorage.getItem('token'),
          }

    }
    
        
      
   // 

    const waitForPostingToBackend=await axios.post('http://localhost:3000/dailyexpenses-user',expenses,config)
    
    //console.log(waitForPostingToBackend,'i want to get data')
    document.getElementById('expenses').innerHTML=document.getElementById('expenses').innerHTML+`<li id=${waitForPostingToBackend.data.id}>Description-${waitForPostingToBackend.data.description} Rs Spend-${waitForPostingToBackend.data.spend} Details-${waitForPostingToBackend.data.variety}<input type=button onclick=deleteUserFromBackend("${waitForPostingToBackend.data.id}") value=DELETE></li>`
}
    
async function deleteUserFromBackend(a)
{
    let config = {
        headers: {
            header1:localStorage.getItem('token'),
          }

    }
    
    const waitForDeletion=await axios.delete(`http://localhost:3000/delete-user/${a}`,config)

    document.getElementById('expenses').removeChild(document.getElementById(a))
    //
}
document.addEventListener('DOMContentLoaded',displayAfterRefreshingPage)
async function displayAfterRefreshingPage(){
    let config = {
        headers: {
            header1:localStorage.getItem('token'),
          }

    }

    const waitForGettingUserDataFromBackend=await axios.get('http://localhost:3000/get-user',config)
    let output=""

    for(let i=0;i<waitForGettingUserDataFromBackend.data.length;i=i+1)
    {
        output=output+`<li id=${waitForGettingUserDataFromBackend.data[i].id}>Description-${waitForGettingUserDataFromBackend.data[i].description} Rs Spend-${waitForGettingUserDataFromBackend.data[i].spend} Details-${waitForGettingUserDataFromBackend.data[i].variety}
        <input type=button onclick=deleteUserFromBackendAfterRefreshingPage("${waitForGettingUserDataFromBackend.data[i].id}") value=DELETE></li>`


    }
    document.getElementById('oldexpenses').innerHTML=output




}
async function deleteUserFromBackendAfterRefreshingPage(a)
{
    let config = {
        headers: {
            header1:localStorage.getItem('token'),
          }

    }
    const waitForDeletion=await axios.delete(`http://localhost:3000/delete-user/${a}`,config)

    document.getElementById('oldexpenses').removeChild(document.getElementById(a))

}

document.getElementById('pay').addEventListener('click',sendPremiumAccountDetails)

async function sendPremiumAccountDetails()
{

    await axios.post()
}