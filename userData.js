const queryString = require("querystring");

function userDataform(req,resp){
    let dataBody=[]
    req.on('data',(chunk)=>{
        
        dataBody.push(chunk);
    })
    req.on('end',()=>{
        let rowData=Buffer.concat(dataBody).toString();
        let readabledata=queryString.parse(rowData);
        console.log(readabledata);
        let dataString="My name is "+readabledata.name+" and my emailId is "+readabledata.email;
        console.log(dataString);
    })
    resp.write(`
        <h1>you submit data<h1> 
    `)
}

module.exports=userDataform;