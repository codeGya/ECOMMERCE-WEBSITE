const sequelize=require('./database.js')
const Sequelize=require('sequelize')

const expensetable=sequelize.define('expensetable',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    spend:{
        type:Sequelize.INTEGER
    },
    description:Sequelize.STRING,
    variety:Sequelize.STRING
})
module.exports=expensetable