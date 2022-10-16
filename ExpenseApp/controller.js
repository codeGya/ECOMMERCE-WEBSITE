const modelOfProducts = require('./models.js')
let model=require('./models.js')

exports.handlePosttRequest=async (req,res,next)=>{

    let price=req.body.Price
    let description=req.body.Description
    let quantity=req.body.Quantity
    let variety=req.body.Variety

    await model.sync()
    console.log('i reached here')
    
    let waitForPosting=await model.create({Price:price,Description:description,Quantity:quantity,Variety:variety})

    res.send(waitForPosting.dataValues)
    console.log('i reached here upto')



}
exports.deleteUser=async (req,res,next)=>{
    let deleteId=req.params.deleteId
    await modelOfProducts.destroy({where:{id:deleteId}})

    res.send({})
    
}
exports.getAllUserDetails=async (req,res,next)=>{

    let getDataFromStorage=await model.findAll()
    console.log(getDataFromStorage,'i reached here')
    res.send(getDataFromStorage)

    //res.send(getDataFromStorage)

}