
const legger=(req,res,next)=>{
    const {method,url}=req
    const time=Date.now()
    console.log(method,url,time)
    next()
}

module.exports=legger