let sequelize=require('./models.js')

let Sequelize=require('sequelize')

let product=sequelize.define('product',{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,},
        title:Sequelize.STRING,
        price:{
            type:Sequelize.DOUBLE,
            allowNull:false
        },
        imageurl:{
            type:Sequelize.STRING,
            allowNull:false
        },
        description:{
            type:Sequelize.STRING,
            allowNull:false
        }

})

module.exports=product