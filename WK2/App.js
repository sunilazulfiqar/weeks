const http=require('http')

var dt=require('./myfirstmodule');

http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.write("hello world\n Today is "+ dt.GiveDate())
    res.write("\n"+dt.Printmyname())

    res.end("killing the response object here")

}


).listen(8080, ()=>{
    console.log("The server is running ou port 8080")
})