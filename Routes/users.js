const {users,posts} = require('../data')
const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).json({success:true,data:users})
})

router.post('/',(req,res)=>{
    const {name}=req.body
    if(!name){
        return res.status(400).send({success:false,msg:"Oh no, the Table!"})
    }
    res.status(201).send({success:true,person:name })
})

router.put('/:userID',(req,res)=>{
   const {userID} = req.params
   const {name} = req.body
    if(!userID){
        return res.status(400).send({success:false,msg:"Oh no, the Table!"})
    }
    res.status(201).send({success:true,person:name })
})


module.exports=router