const Usertable=require('./usertable.js')
const bcrypt=require('bcrypt')
const Expense=require('./expensetable.js')
const jwt=require('jsonwebtoken')

exports.saveDataOfSignUpToBackend=async (req,res,next)=>{

    const name=req.body.name
    const email=req.body.email
    const password=req.body.password
    console.log(req.body,'request body')
    
    

    
    const searchUserTable=await Usertable.findAll({where:{email:email}})
    //console.log(searchUserTable,'i am in search table')
    if(searchUserTable.length==0)
    {
        console.log('email is new')
        await bcrypt.hash(password,10,async (err,result)=>{
          await Usertable.create({email:email,name:name,password:result})
       })
        

    }
    else{
        console.log('email is old')
        res.send('User already exists!')
    }

    
}
exports.signInAlreadyPresentUser=async (req,res,next)=>{

    const email=req.body.email
    const password=req.body.password

    const waitForSearchingDatabase=await Usertable.findAll({where:{email:email}})
    console.log(waitForSearchingDatabase,'i am about to debug my error')
    console.log('hey i reached here')
    if(waitForSearchingDatabase.length==0)
    {
        // console.log('email is new')
        // await Usertable.create({email:email,name:name,password:password})
        console.log('EmailId doesnt exist')

        res.send('EmailId doesnt exist')

    }
    else if(waitForSearchingDatabase.length>0){
        
        await bcrypt.compare(password,waitForSearchingDatabase[0].password,async (err,result)=>{
            if(result===true)
            {
                const generateToken= jwt.sign({userId:waitForSearchingDatabase[0].id},'indreshsingh')
                res.status(200).send(generateToken)

            }
            else{
                res.send('Password is incorrect')
            }
        })
    }



}
exports.saveDailyExpensesInDataBase=async (req,res,next)=>{
    const spend=req.body.spend
    const description=req.body.description
    const variety=req.body.variety

    const addingDataToBackend=await Expense.create({spend:spend,description:description,variety:variety,usertableId:req.user.id})
    res.send(addingDataToBackend)

}
exports.deleteUser=async (req,res,next)=>{
    const deleteId=req.params.deleteId

    const waitForDeletionFromTable=await Expense.destroy({where:{usertableId:req.user.id}})
    res.send({})
}
exports.getAllUserDataFromBackend=async (req,res,next)=>{
    const waitForGettingUserDataFromBackend=await Expense.findAll({where:{usertableId:req.user.id}})
    res.send(waitForGettingUserDataFromBackend)
}




    
