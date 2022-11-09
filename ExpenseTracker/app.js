const express=require('express')
const cors=require('cors')
const router=require('./router.js')
const app=express()
const sequelize=require('./database')
const userTable=require('./usertable')
const expenseTable=require('./expensetable')

userTable.hasMany(expenseTable)
expenseTable.belongsTo(userTable)
synchronizing()
async function synchronizing()
{
    await sequelize.sync()
}


app.use(express.json())
app.use(cors())

app.use(router)

app.listen(3000)