//models

module.exports=class addProduct{

    constructor(a,b)
    {
        this.a=a
        this.b=b
    }
    static save()
    {
        return db.execute('INSERT INTO products (title,price,description,imageurl) VALUES (?,?,?,?)',[this.title,this.price,this.description,this.imageurl])
    }
}

//
module.exports=class Cart{

    static addProduct(id)
    {
         return db.execute('SELECT * FROM products').then(([result])=>{
            console.log(result[0].id)
         })
    }
}

//model

class Delete{

    static Delete(id){
        return db.execute('DELETE FROM products WHERE id=1')
        .then(()=>{
            resizeBy.redirect('/')
        })

    }
}