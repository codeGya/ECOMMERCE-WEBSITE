let express=require('express')
let router=express.Router()

let models=require('./models.js')
//express.urlencoded({extended:true})
//router.use(express.json())

router.post('/post-user',async (req,res,next)=>{
    //console.log(req.body)
    let a=req.body.Name
    let b=req.body.Email
    let c=req.body.Mnumber
    //console.log('i reached here')
    //console.log(req.body)

    //await models.sync()

    let waitForStoringInDatabase=await models.create({Name:a,Email:b,MobileNumber:c})
    //res.send(waitForStoringInDatabase)
    //console.log(waitForStoringInDatabase.dataValues)
    //console.log(res.send(waitForStoringInDatabase.dataValues))
    res.send(waitForStoringInDatabase.dataValues)


})
router.get('/get-user/:particularId',async (req,res,next)=>{
    let a=req.params.particularId
    console.log(a)

    let getDataForParticularId=await models.findByPk(a)
    res.send(getDataForParticularId)
   console.log(getDataForParticularId,'hey i want to find particular data')
})
//router.get('')
router.get('/get-user',async (req,res,next)=>{
    let waitForGettingData=await models.findAll()
    res.send(waitForGettingData)
    //console.log(waitForGettingData)
    console.log(waitForGettingData,'hey i want to fina all data')
})
router.delete('/delete-user/:deleteId',async (req,res,next)=>{

    let deleteId=req.params.deleteId
    let waitForDeletion=await models.destroy({where:{id:deleteId}})
    console.log('deleted')
    return res.status(200).json({})

})
//router.get('/')
module.exports=router