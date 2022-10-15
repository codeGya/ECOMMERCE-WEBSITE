let Sequelize=require('sequelize')
let sequelize=new Sequelize('node_complete','root','Is18071995$',{host:'localhost',dialect:'mysql'})

let products=sequelize.define('user',{
    id:
    {type:Sequelize.INTEGER,
    primaryKey:true,
    allowNull:false,
    autoIncrement:true},
    Name:
    {type:Sequelize.STRING,
    allowNull:false},
    Email:
    {
        type:Sequelize.STRING,
        allowNull:false
    },
    MobileNumber:
    {
        type:Sequelize.TEXT,
        allowNull:false

    }},{tableName:'booking_final'}

)
//products.sync()
products.sync()
module.exports=products
