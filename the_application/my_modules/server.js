//https://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server
var connect = require('connect');
var serveStatic = require('serve-static')
const publicpath = __dirname+"/../the_public"
const port = 8008
connect().use(serveStatic(publicpath)).listen(port, function(){
    console.log("publicpath:",publicpath,"port:",port)
})
