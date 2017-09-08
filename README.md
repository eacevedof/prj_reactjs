
<!--
\README.md 1.2.0
-->
<h1>Tutorial: Curso React  (codigofacilito) </h1>
<h3>
    <a href="https://github.com/eacevedof/prj_reactjs" target="_blank">
    Repo
    </a>
</h3>
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
<li>- actualizo webpack.config.js con nuevas rutas</li>
</ul>

<h2>Errores</h2>
<pre>
<b>er:</b>
npm start
ERROR in ./app/dist/index.js
Module not found: Error: Cannot resolve 'file' or 'directory' ./components/FilterableProductTable.js in C:\xampp\htdocs\prj_reactjs\app\dist
 @ ./app/dist/index.js 11:30-79

<b>sol:</b> cambio esta linea en dist/index.js
import FiterableProductRow from "../src/components/FilterableProductTable.js" 
<b>er:</b>
http://localhost:8080/
[HMR] Waiting for update signal from WDS...
ReactDOM.js:66 Download the React DevTools for a better development experience: https://fb.me/react-devtools
SearchBar.js:6 Uncaught ReferenceError: React is not defined
    at Object.<anonymous> (SearchBar.js:6)
    at __webpack_require__ (bootstrap 15a917e…:555)
    at fn (bootstrap 15a917e…:86)
    at Object.<anonymous> (FilterableProductTable.js:5)
    at __webpack_require__ (bootstrap 15a917e…:555)
    at fn (bootstrap 15a917e…:86)
    at Object.<anonymous> (index.js:7)
    at __webpack_require__ (bootstrap 15a917e…:555)
    at fn (bootstrap 15a917e…:86)
    at Object.<anonymous> (bootstrap 15a917e…:578)
    at __webpack_require__ (bootstrap 15a917e…:555)
    at bootstrap 15a917e…:578
    at bootstrap 15a917e…:578
http://localhost:8080/favicon.ico Failed to load resource: the server responded with a status of 404 (Not Found)
index.min.js:631 [WDS] Hot Module Replacement enabled.
<b>sol:</b>
intentos:
    cambiando esto: script src="/dist/js/index.min.js" /script :s
    en index.js cambio metodo react(..) por ReactDOM.render(filterableproductrow/,eDiv) :S
    devuelvo index.html a como estaba :S
    No se si los tags en reactjxs tienen que ser iguales a los nombres de los componentes, yo los cambie por tener todo en minusculas. Voy a dejarlos 
    como en el video.
    cambio index.js a ReactDOM.render(FiterableProductRow/,eDiv) :s
    ERROR in ./app/dist/index.js
Module not found: Error: Cannot resolve 'file' or 'directory' ./components/FiterableProductRow.js in C:\xampp\htdocs\prj_reactjs\app\dist
 @ ./app/dist/index.js 11:27-73
    falta ese archivo (filtertableproductrow)
    Revision completa de todos los archivos... 
        Faltaba corregir el "entry"
        Corregir src/index.js 
        Corregir import Ract en todos los componentes. Este era el problema real
</pre>
<!------------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------------>
<h2>
    <a href="https://youtu.be/u2-FOMMSKGc?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub" video="link" target="_blank">
    Video 7 - Curso React - Uso de datos en components Props y State
    </a>
</h2>

<ul>
<li>Se crea un array de objetos como ejemplo de base de datos en el componente principal index.js</li>
<li>Al ejecutar el render se pasa esta variable como propiedad "store" del componente que se va a pintar "FilterableProductTable"</li>
<li>FilterableProductTable (en modo clase) recibe esta propiedad en su atributo props</li>
<li>Siempre que se desee hacer código espaguetti como en php, se tiene que hacer usando los marcadores { ... }</li>
<li>Para pintar el listado se ejecuta el metodo foreach</li>
<li>Cada componente debe estar asociado a una única clave que se pasa en el atributo key</li>
</ul>

<h2>Errores</h2>
<pre>
<b>er:</b>
Warning: flattenChildren(...): Encountered two children with the same key, `.$Sporting goods`. Child keys must be unique; when two children share a key, only the first child will be used.
warning @ warning.js:45
instantiateChild @ ReactChildReconciler.js:26
traverseAllChildrenImpl @ traverseAllChildren.js:98
traverseAllChildrenImpl @ traverseAllChildren.js:114
traverseAllChildren @ traverseAllChildren.js:186
instantiateChildren @ ReactChildReconciler.js:52
_reconcilerInstantiateChildren @ ReactMultiChild.js:197
mountChildren @ ReactMultiChild.js:232
_createContentMarkup @ ReactDOMComponent.js:591
mountComponent @ ReactDOMComponent.js:479
mountComponent @ ReactReconciler.js:37
mountComponent @ ReactCompositeComponent.js:225
ReactCompositeComponent_mountComponent @ ReactPerf.js:66
mountComponent @ ReactReconciler.js:37
mountChildren @ ReactMultiChild.js:241
_createContentMarkup @ ReactDOMComponent.js:591
mountComponent @ ReactDOMComponent.js:479
mountComponent @ ReactReconciler.js:37
mountComponent @ ReactCompositeComponent.js:225
ReactCompositeComponent_mountComponent @ ReactPerf.js:66
mountComponent @ ReactReconciler.js:37
mountComponent @ ReactCompositeComponent.js:225
ReactCompositeComponent_mountComponent @ ReactPerf.js:66
mountComponent @ ReactReconciler.js:37
mountComponentIntoNode @ ReactMount.js:266
perform @ Transaction.js:136
batchedMountComponentIntoNode @ ReactMount.js:282
perform @ Transaction.js:136
batchedUpdates @ ReactDefaultBatchingStrategy.js:62
batchedUpdates @ ReactUpdates.js:94
_renderNewRootComponent @ ReactMount.js:476
ReactMount__renderNewRootComponent @ ReactPerf.js:66
_renderSubtreeIntoContainer @ ReactMount.js:550
render @ ReactMount.js:570
React_render @ ReactPerf.js:66
(anonymous) @ index.js:23
__webpack_require__ @ bootstrap e4075f5…:555
fn @ bootstrap e4075f5…:86
(anonymous) @ bootstrap e4075f5…:578
__webpack_require__ @ bootstrap e4075f5…:555
(anonymous) @ bootstrap e4075f5…:578
(anonymous) @ bootstrap e4075f5…:578
2warning.js:45 Warning: flattenChildren(...): Encountered two children with the same key, `.$Electronics`. Child keys must be unique; when two children share a key, only the first child will be used.

<b>sol:</b> 
Tenía mal este "if": if(oProduct.category!=sLastCategory) encerraba a todas las lineas inferiores

<b>er:</b>
No da error pero muestra esto:
ProductCategoryRow
ProductRow
ProductRow
ProductRow

ProductCategoryRow
ProductRow
ProductRow
ProductRow

<b>sol:</b>
Faltaba corregir los renders de ProductCategoryRow y ProductRow
</pre>
<!------------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------------>
<h2>
    <a href="https://youtu.be/_afpJ894lD4?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub" video="link" target="_blank">
    Video 8 - Curso React - Eventos y Data change
    </a>
</h2>

<ul>
<li>Como la info cambia a traves del tiempo y se actualiza gracias a los componentes</li>
<li>
    <a href="https://youtu.be/_afpJ894lD4?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=50" video="link" target="_blank">
    configurando FilterableProductTable con props.state.filter
    </a>
</li>
<li>
    <a href="https://youtu.be/_afpJ894lD4?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=100" video="link" target="_blank">
    configurando ProductTable trata el filtro al cargar arRows
    </a>
</li>
<li>
    <a href="https://youtu.be/_afpJ894lD4?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=288" video="link" target="_blank">
    configurando SearchBar 
    </a>
    <ul>
        <li>
            <b>Atención con esto:</b> <pre>onChange={this.filter_list.bind(this)}</pre>. Si no se agrega bind(this) la <br/>
            función "filter_list" se estaria buscando en el componente SearchBar.<br/>
            En otras palabras con se le dice... para el componente SearchBar ejecuta el metodo <br/>
            FilterableProductTable.filter_list.<br/>
            Con bind se crea un puntero a un metodo foraneo. <br/>
            <a href="https://youtu.be/_afpJ894lD4?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=319" video="link" target="_blank">
            Con esta sentencia se hace un remplazo del "this" foraneo por el local.
            </a>
        </li>
        <li>
            <a href="https://youtu.be/_afpJ894lD4?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=358" video="link" target="_blank">
            Configurando el metodo filter_list(oEv)
            </a>        
        </li>
    </ul>
</li>
</ul>

<h2>Errores</h2>
<pre>
<b>er:</b>
    No hay error pero no recibe los valores. No funciona

<b>sol:</b>
    onChange={this.props.onChange} se estaba escribiendo en el checkbox
    en ProductTable habia que cambiar la jerarquia del if, primero se comprueba 
    this.props.filter!=null && this.props.products!=null
</pre>
<!------------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------------>
<h2>
    <a href="https://youtu.be/kMhTpPG1WJM?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub" video="link" target="_blank">
    Video 9 - Curso React - Single App y ReactRouter
    </a>
</h2>

<ul>
<li>
    <h3>Instalar React router</h3>
    <p>
        React router ayuda a construir una app en "single page". Según las rutas hash monta el contenido en una página 
        actualizando sus componentes
    </p>
</li>
<li>
    <pre>
        npm install -save react-router
    </pre>
    <h3>Un poco sobre <b>--save:</b></h3>
    Por defecto NPM instala los paquetes dentro de node_modules.
    <pre>
        node_modules/
            ...
            async/
                dist/
                    async.js
                    async.min.js
                lib/
                    async.js
                CHANGELOG.md
                LICENSE
                package.json
                README.md
            ...
            babel-core/
                lib/
                node_modules/
                    source-map/
                        dist/
                        lib/
                        CHANGELOG.md
                        LICENSE
                        package.json
                        README.md
                        source-map.js
                index.js
                package.json
                README.md
                register.js
    </pre>
    <i>save</i> le indica a NPM que incluya el paquete dentro de la seccion de dependencias en tu archivo <b>package.json</b>
    de forma automática.  Evitando que lo tengas que hacer a mano.
    Un ejemplo de pakage.json
    <pre>
    ...
          "dependencies": {
            "babel-loader": "^6.2.0",
            "babel-plugin-add-module-exports": "^0.1.2",
            "babel-plugin-react-html-attrs": "^2.0.0",
            "babel-plugin-transform-class-properties": "^6.3.13",
            "babel-plugin-transform-decorators-legacy": "^1.3.4",
            "babel-preset-es2015": "^6.3.13",
            "babel-preset-react": "^6.3.13",
            "babel-preset-stage-0": "^6.3.13",
            "react": "^0.14.6",
            "react-dom": "^0.14.6",
            "react-router": "^4.0.0", <b>&lt;--- router incluido despues de ejecutar el comando </b>
            "webpack": "^1.12.9",
            "webpack-dev-server": "^1.14.1"
            },
    ...
    </pre>
</li>
<li>
    <h3>Resultado</h3>
    <pre>
    ...
    +-- UNMET PEER DEPENDENCY react@0.14.8
    `-- react-router@4.0.0
    +-- history@4.6.1
    | +-- resolve-pathname@2.0.2
    | `-- value-equal@0.2.0
    +-- path-to-regexp@1.7.0
    | `-- isarray@0.0.1
    `-- warning@3.0.0
    </pre>
    <pre>
    npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
    npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.1.1
    npm WARN react-router@4.0.0 requires a peer of react@^15 but none was installed.
    npm WARN the_react@1.0.0 No repository field.    
    </pre>
</li>
<li>
    <a href="https://youtu.be/kMhTpPG1WJM?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=77">Actualizo index.js</a>
</li>
<li>
    Se crea carpeta routes para guardar todos los archivos de rutas. Estos archivos también son componentes.<br/>
    <a href="https://youtu.be/kMhTpPG1WJM?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=140">Se crea archivo de rutas</a>
</li> 
<li>
    <a href="https://youtu.be/kMhTpPG1WJM?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=291">Store.js</li>
</li>
<li>
    En conclusion, el router es un componente principal que se instanciara en el index.js, que es donde se carga la app.
    Este componente cuenta con propiedades que le indican que otros componentes se deben cargar.
    En este caso, nos basta con cargar el Componente padre FilterableProductTable que es el componente Tabla de productos.
    Este ya es encargara de incluir (importar) a sus hijos: SearchBar y ProductTable
</li>
</ul>

<h2>Errores</h2>
<pre>
Al ejecutar npm --save react-router
<b>er:</b>
npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.1.1
npm WARN react-router@4.0.0 requires a peer of react@^15 but none was installed.
npm WARN the_react@1.0.0 No repository field.

<b>sol:</b>
npm update 
<h3>Resultado:</h3>
+-- babel-core@6.24.0
+-- babel-loader@6.4.1
+-- babel-preset-es2015@6.24.0
`-- UNMET PEER DEPENDENCY react@0.14.8

npm WARN optional Skipping failed optional dependency /chokidar/fsevents:
npm WARN notsup Not compatible with your operating system or architecture: fsevents@1.1.1
npm WARN react-router@4.0.0 requires a peer of react@^15 but none was installed.
npm WARN the_react@1.0.0 No repository field.

<b>sol:</b>
npm update --no-optional
<b>--no-optional</b> Instala los paquetes "sin" las dependencias opcionales
<h3>Resultado:</h3>
modified:   node_modules/jsesc/bin/jsesc
modified:   node_modules/jsesc/jsesc.js
modified:   node_modules/jsesc/man/jsesc.1
modified:   node_modules/jsesc/package.json
modified:   node_modules/source-map-support/browser-source-map-support.js
modified:   node_modules/source-map-support/package.json
modified:   node_modules/source-map-support/source-map-support.js
modified:   node_modules/source-map-support/test.js
deleted:    node_modules/source-map-support/webpack-test/compiled.js
deleted:    node_modules/source-map-support/webpack-test/index.html
deleted:    node_modules/source-map-support/webpack-test/script.js
deleted:    node_modules/source-map-support/webpack-test/webpack.config.js
<b>er:</b>
Warning: Failed propType: Required prop `history` was not specified in `Router`
<b>sol:</b>
Cambiar package.json react-router a la version instalada en el video.
Estaba instalando la version 4.0 y esta necesita react y react-dom con versiones superiores
a las que tengo
</pre>
<!------------------------------------------------------------------------------------------------------------------------------------>
<!------------------------------------------------------------------------------------------------------------------------------------>