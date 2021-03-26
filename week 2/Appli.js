const http = require("http");

var dt=require('./myfirstmodule')

http.createServer(function (req,res){
    
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.write("Hello World! \nToday is "+dt.GiveDate());
    res.write("\nMy name is"+dt.printname());
    res.end("\nkilling the response obj here");
                                                                     //for creating a server
}).listen(8080, ()=>{
    console.log("this server is running on port 8080");
});

function sayHello(name)
{
    console.log('Hello'+name);
}
sayHello('Sana');