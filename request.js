const http=require("http");

http.createServer((req,resp)=>{
    console.log(req.url);
    
    if(req.url=="/"){
        resp.write("<h1>HOME PAGE<h1>");
    }else if(req.url=="/login"){
        resp.write("<h1>login PAGE<h1>");
    }else{
        resp.write("<h1>other PAGE<h1>");
    }
    
    resp.end();
}).listen(5200)