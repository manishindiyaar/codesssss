const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url== '/hello'){
        res.end("Hello World!")
    }else if(req.url =='/welcome'){
        res.end("welcome students");
    }else{
        res.writeHead(404);
        res.end("You are Trying To hit a Wrong URL")
    }
})
server.listen(8000);
console.log("Server Started!")