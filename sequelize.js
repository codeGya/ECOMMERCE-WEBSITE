const Sequelize=require('sequelize')
const sequelize=new Sequelize('node_complete','root','Is18071995$',{host:'localhost',dialect:'mysql'})

const a=sequelize.define('a1',
{
    id:{type:Sequelize.INTEGER,
    autoIncrement:true,
primaryKey:true},
Email:Sequelize.STRING,
M_number:Sequelize.STRING
})

const b=sequelize.define('b2',{
    id:{type:Sequelize.INTEGER,
    primaryKey:true,
autoIncrement:true},
Email:Sequelize.STRING,
M_number:Sequelize.STRING
})

a.hasOne(b,{allowNull:false})
b.belongsTo(a)

a.sync()
b.sync().then(a.create({Email:'a@gmail.com',M_number:'9458707445'}))
