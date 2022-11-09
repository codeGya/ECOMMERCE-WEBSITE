const jwt=require('jsonwebtoken')
const userTable=require('./usertable.js')

exports.gettingToken=async (req,res,next)=>{
   const tokenRecover=await jwt.verify(req.headers.header1,'indreshsingh')
   console.log(tokenRecover,'recovered token')

   
   const findParticularUser=await userTable.findByPk(tokenRecover.userId)
   console.log(findParticularUser)
   req.user=findParticularUser
   next()

   
}