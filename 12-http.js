const http = require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
    res.write('welcome to our home page');}
    if(req.url==='/about'){
    res.end('hostory');}
    
    res.end(`<h1>oops</h1>
        <p>comanina</p>
        <a href="/">backhome</a>`
    )

})

server.listen(5000)