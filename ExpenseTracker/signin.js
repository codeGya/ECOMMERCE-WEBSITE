document.getElementById('signin').addEventListener('submit',signInPageForUsers)

async function signInPageForUsers(e)
{
    

    e.preventDefault()
    console.log('i am in sinin page')
    const email=document.getElementById('email').value
    const password=document.getElementById('password').value
    const userTable={
        email:email,
        password:password
    }
    const waitForLoggingIn=await axios.post('http://localhost:3000/sign-user',userTable)
    //console.log(waitForLoggingIn,'i want to generate token')
    localStorage.setItem('token',waitForLoggingIn.data)
    if(waitForLoggingIn.status===200)
    {
        window.location.href='./expense.html'
    }

   // document.getElementById('old').innerHTML=`<li>${waitForLoggingIn.data}</li>`
}