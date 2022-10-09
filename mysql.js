let mysql=require('mysql2')
let pool=mysql.createPool({host:'localhost',user:'root',database:'node_complete',password:'Is18071995$'})

module.exports=pool.promise()