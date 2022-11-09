const Sequelize=require('sequelize')

const sequelize=new Sequelize('node_complete','root','Is18071995$',{dialect:'mysql',host:'localhost'})
module.exports=sequelize