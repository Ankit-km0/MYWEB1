const http=require('http');
const fs=require('fs');
const querystring=require('querystring');
const { error } = require('console');

http.createServer((req,resp)=>{
    fs.readFile('web.html','utf-8',(err,data)=>{
        if(err){
            resp.writeHead(500,{"content-type":'text/plain'});
            resp.write('internal server error');
            resp.end();
            return;
        }
            resp.writeHead(200,{"content-type":'text/html'})
        if(req.url=='/'){
            resp.write(data);
        }else if(req.url=='/submit'){
            let databody=[];
            req.on('data',(chunk)=>{
                databody.push(chunk);
            });

            req.on('end',()=>{
                let rowData=Buffer.concat(databody).toString();
                let readabledata=querystring.parse(rowData);
                console.log(readabledata);
                let dataString="My name is "+readabledata.name+" and my emailId is "+readabledata.email;
                console.log(dataString);
                // sync data type
                // fs.writeFileSync("text/"+ readabledata.name + ".txt",dataString)
                // console.log("file created")

                //Async data type

                fs.writeFile("text/"+ readabledata.name + ".txt",dataString,'utf-8',(error)=>{
                    if(error){
                        resp.end("internal server error")
                        return false;
                    }else{
                        console.log("file created")
                    }
                })

            })
            resp.write('<h1>Data Submit</h1>');
        }
        resp.end();
            
    })
}).listen(3200);







