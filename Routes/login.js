const express = require('express')
const router = express.Router();

router.post('/',(req,res)=>{
    console.log(req.body)
    let {name}=req.body
    name=name.trim()
    if(!name){
        return res.sendStatus(418)///res.status(401).send(`<strong>incomplete</strong>`)
    }
    res.status(200).send(`Ollo, ${name}`)
})

module.exports=router