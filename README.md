
<!--
README.md branch edteam 1.0.0
Minicurso de React.js (1) - Introducción a React y JSX 
https://github.com/eacevedof/prj_reactjs/tree/edteam
-->
<h1>
    <a href="https://github.com/eacevedof/prj_reactjs/tree/edteam">Branch - Edteam</a>
</h1>

<h2>
    Minicurso de React.js EDTEAM
</h2>
<ul>
    <ol>    
        <a href="https://www.youtube.com/watch?v=4gAAiOKOwio">1 - Introducción a React y JSX</a>
    </ol>
    <ol>
        <a href="https://www.youtube.com/watch?v=ld8pG4RPAeI">2 - Componentes y propiedades</a>
    </ol>
    <ol>
        <a href="https://www.youtube.com/watch?v=8AeJOIk58tQ">3 - Los estados y los eventos</a>
    </ol>    
</ul>

```js
//Ejecutar
node .\the_application\my_modules\server.js
```

<b>Ejecutar</b>
    http://127.0.0.1:8008/index.html

<b>Error:</b>

```
app.jsx:8 Uncaught TypeError: Cannot read property 'saludo' of undefined
    at Hello.render (<anonymous>:26:28)
    at react-dom.js:5257
    at measureLifeCyclePerf (react-dom.js:4537)
    at ReactCompositeComponentWrapper._renderValidatedComponentWithoutOwnerOrContext (react-dom.js:5256)
    at ReactCompositeComponentWrapper._renderValidatedComponent (react-dom.js:5283)
    at ReactCompositeComponentWrapper.performInitialMount (react-dom.js:4823)
    at ReactCompositeComponentWrapper.mountComponent (react-dom.js:4719)
    at Object.mountComponent (react-dom.js:11551)
    at ReactCompositeComponentWrapper.performInitialMount (react-dom.js:4832)
    at ReactCompositeComponentWrapper.mountComponent (react-dom.js:4719)
```

<b>solución:</b>

```
El error era esto: <h1>{this.oProps.saludo}</h1> se debia cambiar por 
<h1>{this.props.saludo}</h1>
```
