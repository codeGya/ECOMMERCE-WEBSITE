let Sequelize=require('sequelize')
let sequelize=new Sequelize('node_complete','root','Is18071995$',{host:'localhost',dialect:'mysql'})

let model=sequelize.define('user',{
    id:{type:Sequelize.INTEGER,
        primaryKey:true},
    description:Sequelize.STRING
},{tableName:'Booking Appointment of Yash'})

// if(sequelize.models.user===model_on){
//     console.log('hey i ma trying')
// }
async function modelSynchronization()
{
    await model.sync()
  //model.create({id:1,description:'i am wasting my five months effort'})
    //model.destroy({where:{id:1}})
    // await model.create({id:3,description:'i am dealing with buch of idiots'
    // })
    // await model.destroy({where:{
    //     id:2
    // }})
    //await model.update({id:1},{where:{id:3}})\

    let dataOfPrimaryKey=await model.findByPk(1)
    console.log(dataOfPrimaryKey)

}
modelSynchronization()

