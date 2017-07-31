var http = require('http');

http.createServer(function (request, response) {
    console.log("request",request,"respones",response)
    response.simpleJSON = function(codStatus,obj){
        var sBody = JSON.stringify(obj)
        response.writeHead(codStatus, {
            'Content-Type': 'text/plain',
            'Content-Length': sBody.length,
            'Access-Control-Allow-Origin' : '*'
        });
        response.write(sBody)
        response.close()
    }
    //handler(request,response)
}).listen(1337);

sys.puts("Server at http://127.0.0.1:1337/");