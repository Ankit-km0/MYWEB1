const fs=require('fs');

const arg=process.argv;
const contest=arg[2];
if( contest==="write"){
    const NAME=arg[3];
    const data=arg[4];
    fs.writeFileSync("file/"+NAME+".txt",data);
}else if (contest==="read"){
    const NAME=arg[3];
    let filedata=fs.readFileSync("file/"+ NAME+".txt","utf-8");

    console.log(filedata);
}else if(contest==="append"){
    const NAME=arg[3];
    const data=arg[4];
    fs.appendFileSync("file/"+NAME+".txt",data);   
}else if(contest==="unlink"){
    const NAME=arg[3];
    fs.unlinkSync("file/"+NAME+".txt");
}







// const data=fs.readFileSync('MIss.txt','utf-8');
// console.log(data);
// fs.appendFileSync('MIss.txt',"i am a b.tech cse student");
// console.log(data);

