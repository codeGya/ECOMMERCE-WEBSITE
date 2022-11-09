const sequelize=require('sequelize')

const Sequelize=new sequelize('sys','root','Is18071995$',{dialect:'mysql',host:'localhost'})

const products=Sequelize.define('new_table',{
    id:{type:sequelize.INTEGER,
        primaryKey:true
    },
    price:{type:sequelize.INTEGER},
    description:{type:sequelize.STRING},
    mfg:{type:sequelize.INTEGER},
    manufacturer:{type:sequelize.STRING},
    expirydate:sequelize.INTEGER


})
//products.create({id:1,price:100,description:'i will be next elon musk',mfg:2022,manufacturer:'ITC LIMITED',expirydate:2024})
//products.findAll().then(result=>console.log(result))
products.getElementById(1).then(result=>console.log(result))

Sequelize.sync()
