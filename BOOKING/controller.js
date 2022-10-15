let express=require('express')
let app=express()

let router=require('./router.js')
let cors=require('cors')
app.use(cors())
//app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(router)
app.use(router)
app.use(router)
app.use(router)

app.listen(3300)
