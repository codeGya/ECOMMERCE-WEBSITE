let express=require('express')

let app=express()
let cors=require('cors')

let router=require('./router.js')
app.use(express.json())
app.use(cors())

app.use(router)
app.use(router)
app.use(router)


app.listen(3500)