const {Sequelize}=require('sequelize');
// const dotenv=require('dotenv')
// dotenv.config()

//console.log(process.env'hey')

const sequelize= new Sequelize(process.env.DB_SEQUELIZE,process.env.DB_USERNAME,process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,dialect:'mysql'
})

module.exports=sequelize;