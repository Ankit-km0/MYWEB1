const http=require('http')
const queryString=require('querystring');
const userForm=require('./userForm')
const userDataform=require('./userData')

http.createServer((req,resp)=>{
    resp.writeHead(200,{"content-type":"text/html"});
    if(req.url=="/"){
        userForm(req,resp);
    }else if(req.url=="/submit"){
        userDataform(req,resp)
        
    }
    
    resp.end();
}).listen(4500);