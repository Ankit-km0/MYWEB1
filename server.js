const http=require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>hello this is my 1 server of the day</h1> /n");
    resp.write("<h1>hello this is day 2</h1> /n");

    resp.end("good byyy");
}).listen(5200);


// require('colors');
// // require('nodemon');
// console.log(("kjhgfd/n").red);
// console.log(("kjhgfd/n").blue);
// console.log(("kjhgfd /n").white);
// console.log(("hii ,my self anit").rainbow); 
// console.log(("kjhgfd /n").bgBlack);
// console.log(("hii ,my self anit").rainbow); 

