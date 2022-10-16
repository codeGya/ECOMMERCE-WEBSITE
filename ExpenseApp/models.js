const Sequelize=require('sequelize')
const sequelize=new Sequelize('node_complete','root','Is18071995$',{host:'localhost',dialect:'mysql'})

let modelOfProducts=sequelize.define('models',{
    id:
    {
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true

    },
    Price:
    {
        type:Sequelize.INTEGER,
        allowNull:false

    },
    Description:
    {
        type:Sequelize.STRING,
        allowNull:false
    },
    Quantity:{
        type:Sequelize.INTEGER,
        allowNull:false

    },
    Variety:
    {
        type:Sequelize.STRING,
        allowNull:false
    }}



) 
createTable()
async function createTable()
{
    modelOfProducts.sync()


}

module.exports=modelOfProducts