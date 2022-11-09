let sequelize=require('sequelize')

let Sequelize=new sequelize('practice','root','Is18071995$',{dialect:'mysql'})

let product=Sequelize.define('hey_baby',{
    id:{type:sequelize.INTEGER,
    primaryKey:true},
    price:sequelize.INTEGER,
    description:sequelize.STRING
})

Sequelize.sync()