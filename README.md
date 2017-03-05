
<!--
\README.md 1.0.0
-->
<h1>Tutorial: Curso React  (codigofacilito) </h1>

<h2>
    <a href="https://youtu.be/JbnkY3V8SUs?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub" video="link" target="_blank">
    Video 5 - Curso React - Components
    </a>
</h2>

<ul>
<li><b>npm init (npm i)</b> - genera package.json mostrando una serie de preguntas. <b>--yes</b> o <b>-y</b>: se salta las preguntas </li>
<li>
    <b>npm i -D webpack webpack-dev-server babel-loader babel-cli babel-preset-es2015 </b> instala las dependencias.. 
    <i>webpack</i> nos permite que funcione webpack<br/>
    <i>webpack-dev-server</i> crea un servidor de desarrollo en localhost:8080<br/>
    <i>loader</i> dependiendo del tipo de archivo que tengamos permite cargarlo y hacer las transformaciones oportunas
</li>
<li><b>npm start</b> - lanza la ejecución de lo que sea que esté configurado en <i>packagejson.scripts.start</i></li>
<li><b>npm run build</b> - lanza la ejecución de lo que sea que esté configurado en <i>packagejson.scripts.build, el comando webpack</i></li>
<li>archivo: package.json</li>
<li>
    <ul>
    <li><b>se configuran dependencias:</b></li>
    <li>babel: - Transpilador, mediante sus presets y plugins nos permite pasar de ES6 a ES5 que es el js que entienden hoy en día los navegadores</li>
    <li>react: - El paquete de react, conjunto de librerias (react y react-dom)</li>
    <li>
        webpack: - Servidor web (webpack-dev-server) y automatizador de rutinas
        mas sobre webpack <a href="https://www.youtube.com/watch?v=2M5L_uz6GO0" video="link" target="_blank">Webpack - Primeros pasos</a>
    </li>
    </ul>
</li>
<li>con <b>npm install</b> hacemos efectivo lo configurado en package.json</li>
</ul>

<ul>
<li>archivo: webpack.config.js</li>
<li>- agregar <a href="https://youtu.be/JbnkY3V8SUs?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=81" video="link" target="_blank">module.loaders.test</a></li>
<li>crear <a href="https://youtu.be/JbnkY3V8SUs?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=208" video="link" target="_blank">archivo index.html</a> en /app/</li>
<li>definir componente /app/dist/index.js</li>
<li>compilar componente con: <a href="https://youtu.be/JbnkY3V8SUs?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=431" video="link" target="_blank">webpack</a> </li>
<li>
<a href="https://youtu.be/JbnkY3V8SUs?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=520">en package.json configuramos la autocompilación</a> 
cuando se ejecute el comando <b>npm start</b> lanzará el comando <b>./node_modules/.bin/webpack-dev-server --content-base app --inline --hot</b>
en este punto se queda un proceso en ejecucion a la escucha de cambios
</li>
<li>
<a href="https://youtu.be/JbnkY3V8SUs?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=648" video="link" target="_blank">Definicion de constructor en el componente index.js</a> 
</li>
</ul>

<pre>
<b>Resultado de npm start:</b>
$ npm start

> the_react@1.0.0 start C:\xampp\htdocs\prj_tfwreact\the_react
> webpack-dev-server --content-base app --inline --hot

http://localhost:8080/
webpack result is served from /
content is served from C:\xampp\htdocs\prj_tfwreact\the_react\app
Hash: cfe62d6c948f7cec1222
Version: webpack 1.14.0
Time: 2423ms
       Asset     Size  Chunks             Chunk Names
index.min.js  2.41 MB       0  [emitted]  main
chunk    {0} index.min.js (main) 869 kB [rendered]
</pre>

<h2>Errores</h2>
<pre>
<b>er:</b> Uncaught ReferenceError: React is not defined:
<b>sol:</b> Estaba importando React sin mayusculas

<b>er:</b>
    en <a href="reactjs.theframework.es" target="_blank">el desplegado en Apache</a>
    Uncaught ReferenceError: React is not defined
    at Object.<anonymous> (index.js:5)
    at __webpack_require__ (bootstrap 6acd762…:19)
    at bootstrap 6acd762…:39
    at bootstrap 6acd762…:39
<b>sol: No he conseguido desplegar en apache sin errores :S</b> 
</pre>
<!------------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------------>
<h2>
    <a href="https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub" video="link" target="_blank">
    Video 6 - Curso React - Vistas compuestas por varios componentes
    </a>
</h2>

<ul>
<li>crear carpeta /src/components</li>
<li>- crear componentes</li>
<li>- FilterableProductTable</li>
<li>- crear componentes</li>
<li>
    cambio la estructura de carpetas:
    <pre>
    project/
        app/
            dist/
                js/
        src/
            components/
        logs/
        node_modules/
    </pre>
</li>
</ul>

<h2>Errores</h2>
<pre>
<b>er:</b>
npm start
ERROR in ./app/dist/index.js
Module not found: Error: Cannot resolve 'file' or 'directory' ./components/FilterableProductTable.js in C:\xampp\htdocs\prj_reactjs\app\dist
 @ ./app/dist/index.js 11:30-79
<b>sol:</b> 
</pre>
<!------------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------------>