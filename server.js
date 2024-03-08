const http = require('http')

const srv=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end(`<h1> Dyou wanna see some real speed beech...</h1>
        <br><a href='/bitch'>yes</a>`)
    
    if (req.url==="/bitch"){
        res.end(`<h1>ASS  )(  </h1>`)
    }

    res.end(`
        <h1>404, Naa beech!.</h1>
        <p>Can't find ${req.url} beech <br>
        Go <a href='/'>home</a> beech</p>
    `);
})

srv.listen(5050);
