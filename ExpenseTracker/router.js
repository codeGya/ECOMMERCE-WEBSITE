const express=require('express')
const router=express.Router()
const usertable=require('./controller.js')
const authenticate=require('./authenticate.js')

router.post('/post-user',usertable.saveDataOfSignUpToBackend)
router.post('/sign-user',usertable.signInAlreadyPresentUser)
router.post('/dailyexpenses-user',authenticate.gettingToken,usertable.saveDailyExpensesInDataBase)
router.delete('/delete-user/:deleteId',authenticate.gettingToken,usertable.deleteUser)
router.get('/get-user',authenticate.gettingToken,usertable.getAllUserDataFromBackend)
router.post('/buy-premium',)

module.exports=router