//https://stackoverflow.com/questions/6084360/using-node-js-as-a-simple-web-server
var connect = require('connect');
var serveStatic = require('serve-static')
const rootpath = __dirname+"/.."
connect().use(serveStatic(rootpath)).listen(1337, function(){
    console.log("__dirname",__dirname)
    console.log('Server running on 1337...')
})
