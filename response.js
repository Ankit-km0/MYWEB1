const http=require('http');
const server=http.createServer((req,resp)=>{
    
    resp.setHeader("content-type","text/html")
    resp.write(`
        <html>
        <head>
        <title>ankit web</title>
        </head>
        <body>
        <h1>HAy my self ankit</h1>
        <h3>`+Date()+`</h3>
        </body>
        </html>
        `)
    resp.end();
    process.exit()
})
server.listen(6800)
