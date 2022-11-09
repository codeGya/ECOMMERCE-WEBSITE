let a=document.getElementById("myform")

a.addEventListener("submit",saveToDataBase)
//let models=require('./models.js')

async function saveToDataBase(e)
{
    e.preventDefault()
    let a=document.getElementById("name").value
    let b=document.getElementById("email").value
    let c=document.getElementById("mnumber").value

    let user={
        Name:a,
        Email:b,
        Mnumber:c
    }
    console.log('hey')
    let waitForPosting=await axios.post("http://localhost:3300/post-user",user)
    //console.log(req.body)
    //console.log(waitForPosting)
    //console.log('i reached here upto')
 // console.log(waitForPosting.dataValues)
  //console.log(waitForPosting.data)

  document.getElementById("displaybeforerefreshing").innerHTML=document.getElementById("displaybeforerefreshing").innerHTML+`<li id=${waitForPosting.data.id}>Name-${waitForPosting.data.Name}  Email-${waitForPosting.data.Email} MobileNumber-${waitForPosting.data.MobileNumber}  <input type=button onclick=removeFromScreen("${waitForPosting.data.id}") value=DELETE>  <input type=button onclick=editUserDetails("${waitForPosting.data.id}","${waitForPosting.data.Name}","${waitForPosting.data.Email}","${waitForPosting.data.MobileNumber}") value=EDIT></li>`


}

document.addEventListener("DOMContentLoaded",displayDataAfterRefreshingPage)

async function displayDataAfterRefreshingPage()
{
    let waitForGettingDataFromCloud=await axios.get('http://localhost:3300/get-user')
    console.log(waitForGettingDataFromCloud.data)
    
    //console.log(waitForGettingDataFromCloud.data)
    let output=""
    for(let i=0;i<waitForGettingDataFromCloud.data.length;i=i+1)
    {
        output=output+`<li id=${waitForGettingDataFromCloud.data[i].id}> Name-${waitForGettingDataFromCloud.data[i].Name} Email-${waitForGettingDataFromCloud.data[i].Email}  Mobile Number-${waitForGettingDataFromCloud.data[i].MobileNumber}  <input type=button onclick=deleteAfterRefreshing("${waitForGettingDataFromCloud.data[i].id}")  value=DELETE>  <input type=button onclick=editUserDetailsAfterRefreshingPage("${waitForGettingDataFromCloud.data[i].id}","${waitForGettingDataFromCloud.data[i].Name}","${waitForGettingDataFromCloud.data[i].Email}","${waitForGettingDataFromCloud.data[i].MobileNumber}") value=EDIT></li>`

    }
    document.getElementById("displayAfterRefreshing").innerHTML=output
}
async function removeFromScreen(a)
{
    console.log('hey i want to delete')
    await axios.delete(`http://localhost:3300/delete-user/${a}`)
    console.log("hey buddy")
    //models.destroy({where:{id:a}})

    document.getElementById("displaybeforerefreshing").removeChild(document.getElementById(a))
}
async function deleteAfterRefreshing(a)
{
    //removeFromScreen(a)

    await axios.delete(`http://localhost:3300/delete-user/${a}`)
    document.getElementById("displayAfterRefreshing").removeChild(document.getElementById(a))
}
async function editUserDetails(a,b,c,d)
{
    removeFromScreen(a)

    //let waitForParticularData=await axios.delete(`http://localhost:3300/get-user/${a}`)

    //console.log(waitForParticularData)

    // let name=waitForParticularData.data.Name
    // let email=waitForParticularData.data.Email
    // let Mobile_Number=waitForParticularData.data.MobileNumber
    document.getElementById("name").value=b
    document.getElementById("email").value=c
    document.getElementById("mnumber").value=d

}
async function editUserDetailsAfterRefreshingPage(a,b,c,d){
    deleteAfterRefreshing(a)

    //let waitForParticularData=await axios.get(`http://localhost:3300/get-user/${a}`)

    //console.log(waitForParticularData)

    // let name=waitForParticularData.data.Name
    // let email=waitForParticularData.data.Email
    // let Mobile_Number=waitForParticularData.data.MobileNumber
    document.getElementById("name").value=b
    document.getElementById("email").value=c
    document.getElementById("mnumber").value=d


} 