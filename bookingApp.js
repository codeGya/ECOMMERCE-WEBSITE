let express=require('express')
let app=express()

let Sequelize=require('sequelize')
let sequelize=new Sequelize('node_complete','root','Is18071995$',{host:'localhost',dialect:'mysql'})
let products=sequelize.define('User',{
    id:{type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true},
     Name:{type:Sequelize.STRING,
    allowNull:false},
    Email:{type:Sequelize.STRING,
    allowNull:false},
Mnumber:{type:Sequelize.INTEGER,
allowNull:false}},{tableName:'Booking_final'}
)

app.post('/post-user',async (req,res,next)=>{
    await products.sync()
    console.log('hey')



})

app.listen(3300)