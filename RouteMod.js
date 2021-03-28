var express=require('express')
var router=express.Router()
//3000/students/
router.get('/',(req,res)=>{
    res.send('Welcome to my home page')
})
//3000/students/about
router.get('/about',(req,res)=>{
    res.send('welcome to the About page')
})

module.exports=router