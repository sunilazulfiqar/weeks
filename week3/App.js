      
const express=require('express')
var app=express()


app.get('/',(req,res)=> 
{
    res.send("Hello Class!")
}) 

    
app.get('/Books',(req,res)=> 
{
    res.send("Welcome to the Books Section")
}) 


app.get('/Pencils',(req,res)=> 
{
    res.send("Welcome to the Pencils Section" )
}) 



app.post('/',(req,res)=> 
{
    res.send("You have sent a Message to the server")
}) 



app.get('/pencils/:pencilsid/books/:booksid',(req,res)=>{
    res.send(req.params)
})


app.get('/example/d',(req,res,next)=>{
res.write('The response will be sent by next callback function')
next()
},
(req,res)=>
res.end("Hello from d!")
)

var server=app.listen(3000,()=>{
    console.log("Server is up at port 3000.") 
})
 
