const http=require('http');

const userData=[
    {
        Name:"Ankit",
        program:"B.TECH",
        section:27
    },
    {
        Name:"om",
        program:"B.TECH(cse)",
        section:28
    },
    {
        Name:"kailash",
        program:"BCA",
        section:5
    }
]
http.createServer((req,resp)=>{
    resp.setHeader("Content-Type", "application/json");
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(6400)