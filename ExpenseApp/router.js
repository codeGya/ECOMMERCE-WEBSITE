let express=require('express')

let app=express()
let router=express.Router()
let controller=require('./controller.js')

router.post('/post-user',controller.handlePosttRequest)
router.delete('/delete-user/:deleteId',controller.deleteUser)

router.get('/get-user',controller.getAllUserDetails)
module.exports=router