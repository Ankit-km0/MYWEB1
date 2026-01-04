const http=require('http');
const fs=require('fs');

http.createServer((req,resp)=>{
    

    if(req.url=="/"){

        fs.readFile("html/web.html","utf-8",(error,data)=>{
        if(error){
            resp.writeHead(400,{"content-type":"text/plain"});
            resp.end("some internal error")
            return false;
        }
        resp.writeHead(200,{"content-type":"text/html"});
        resp.write(data);
        resp.end();

        });
    }else if (req.url=="/web.css"){
        fs.readFile("html/web.css","utf-8",(error,data)=>{
        if(error){
            resp.writeHead(400,{"content-type":"text/plain"});
            resp.end("css not found ")
            return false;
        }
        resp.writeHead(200,{"content-type":"text/css"});
        resp.end(data);

       });
    }


}).listen(3200);

