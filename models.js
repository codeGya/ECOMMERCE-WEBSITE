const sequelize=require('sequelize')
const Sequelize=new sequelize('node_complete','root','Is18071995$',{dialect:'mysql',host:'localhost'})

const products=Sequelize.define("hey_i",{
    id:{type:sequelize.INTEGER,
        primaryKey:true
    },
    price:sequelize.INTEGER,
    description:sequelize.STRING,
    mfg:sequelize.STRING
})

products.create({id:1,price:100,description:'hey i am becoming lathergic',mfg:2019})
Sequelize.sync()
