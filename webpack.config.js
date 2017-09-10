//webpack.config.js 1.0.0
const Webpack = require("webpack")
const isDebugMode = process.env.NODE_ENV != "production"
const oPath = require("path")
//console.log("oPath:",oPath)
//console.log("_dirname",__dirname) // C:\xampp\htdocs\prj_reactwebpack\the_framework\config
//console.log("resolve ./",oPath.resolve("./")) //C:\xampp\htdocs\prj_reactwebpack
const oWpackConfig = {

    //debugmode
    devtool: isDebugMode ? "inline-sourcemap" : null,
    //file to compile
    entry : oPath.resolve("./the_application/src/index.jsx"),
    //compiled result file. bundle.js
    output : {
        path: oPath.resolve("./the_public/js"),
        publicPath: "/js/",//le indica a webpack donde guardara en memoria lo compilado
        filename : "bundle.js"
    },

    //autoinclude de módulos a utilizar al ejecutar el comando webpack
    //estos módulos se añadirán en el bundle.js
    module: {
        //los loaders facilitan el compilado de código de otros lenguajes a JavaScript nativo
        loaders: [
            {
                test: /\.(js|jsx)?$/,//indica que ficheros debe tener en cuenta
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                //query: son los parámetros que se pasarán a babel-loader
                query: {
                    //los presets son conjuntos de plugins.
                    //plugins necesarios para entender react
                    //es2015 son los plugins necesarios para pasar codigoa a es2015
                    //stage-0 incluye todas las caracteristicas desde 0 hasta 4
                    presets:["react","es2015","stage-0"],
                    //react-html-attrs: atributos propios de react por ejemplo: className
                    //transform-class-properties: transforma atributos estaticos de es2016 a es2015
                    //transform-decorators-legacy: transforma los decoradores, sobre decoradores: http://blog.builtbyedgar.com/decoradores-en-javascript-con-es7-es2016/
                    plugins: [
                        "react-html-attrs","transform-class-properties","transform-decorators-legacy"
                    ],
                }
            }
        ]
    },

    plugins : isDebugMode ? [] : [
        //busca archivos similares en contenido para evitar duplicados en el archivo de salida
        new Webpack.optimize.DedupePlugin(),
        //reduce el nombre de los nombres de las variables
        new Webpack.optimize.OccurrenceOrderPlugin(),
        //"ofuscador", mangle:true ensucia el código, sourceMap=true mapea errores con módulos
        new Webpack.optimize.UglifyJsPlugin({mangle:false,sourceMap:false}),
    ],

    //configuración para webpack-dev-server
    devServer:{
        contentBase: oPath.resolve("./the_public"),
        compress: true,
        port:9000
    }

}//oWpackConfig

module.exports = oWpackConfig