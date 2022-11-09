let sequelize=require('sequelize')
let Sequelize=new sequelize('node_complete','root','Is18071995$',{host:'localhost',dialect:'mysql'})

let products=Sequelize.define('User',{
    id:{type:sequelize.INTEGER,
    primaryKey:true},
    price:{type:sequelize.INTEGER},
    description:{type:sequelize.STRING}},
    {
        tableName:'i_KORAMA'

    }
    )
//products.sync()
//products.create({id:1,price:100,description:"i am wasting my five months effort"})
//products.findAll({where:{id:1}}).then(result=>console.log(result))
//products.create({id:2,price:250,description:'KORAMA PURA HOT HAI'})
products.findAll({where:{id:2}}).then(result=>console.log(result,'hey i am checking my value'))