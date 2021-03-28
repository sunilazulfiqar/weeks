const { Router } = require('express')
var express=require('express')
var router=express.Router()
//3000/students/

router.get('/',(req,res)=>{
    res.send("Retrive all books")
})

Router.post('/',(req,res)=>{
    res.send("Add new books")
})

Router.put('/',(req,res)=>{
    res.send("Update a books")
})

Router.delete('/',(req,res)=>{
    res.send("Delete a books")
})

module.exports=router