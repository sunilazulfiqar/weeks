var express=require('express')
var R1=require('./RouteMod')
var app=express()
// http://localhost:3000/books
app.route('/books')

.get((req,res)=>{
    res.send("Retrive all books")
})

.post((req,res)=>{
    res.send("Add new books")
})

.put((req,res)=>{
    res.send("Update a books")
})

.delete((req,res)=>{
    res.send("Delete a books")
})
app.use('/students',R1)
var server=app.listen(3000, ()=>(console.log("Server is running at 3000")))