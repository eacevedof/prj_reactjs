
<!--
README.md branch makeitreal 1.0.0
Curso Avanzado de React - 1. Introducción a Redux
https://www.youtube.com/watch?v=RZNNu2pO49g
-->
<h1>
    <a href="https://github.com/eacevedof/prj_reactjs/tree/makeitreal">Branch - Make it Real (makeitreal) REDUX</a>
</h1>
    <a href="https://github.com/makeitrealcamp/redux-example/blob/master/package.json">Repo original</a>
<h2>
    
</h2>
<ul>
    <ol>    
        <a href="https://www.youtube.com/watch?v=RZNNu2pO49g">Curso Avanzado de React - 1. Introducción a Redux</a>
    </ol>
    <ol>    
        <a href="https://www.youtube.com/watch?v=aaMoVAcP5-w">Curso Avanzado de React - 2. Integrando Redux a una Aplicación</a>
    </ol>    
    <ol>    
        <a href="https://www.youtube.com/watch?v=5ewsUa1nfiU">Curso Avanzado de React - 3. Action Creators</a>
    </ol>    
    <ol>    
        <a href="https://www.youtube.com/watch?v=dAm3jicYvR8">Curso Avanzado de React - 4. React Redux</a>
    </ol>    
    <ol>    
        <a href="https://www.youtube.com/watch?v=szelbsBXxfs">Curso Avanzado de React - 5. Middlewares</a>
    </ol>    
    <ol>    
        <a href="https://www.youtube.com/watch?v=dRlD0YqU6w4">Curso Avanzado de React - 6. Operaciones Asincrónicas</a>
    </ol>                    
    <ol>    
        <a href="https://www.youtube.com/watch?v=G_dbuk9B2pQ">Curso Avanzado de React - 7. Combinando Funciones Reductoras</a>
    </ol>                    
    <ol>    
        <a href="https://www.youtube.com/watch?v=phuXKvUsYi8">Curso Avanzado de React - 8. Introducción a Jest y Enzyme</a>
    </ol>                    
    <ol>    
        <a href="https://www.youtube.com/watch?v=Tos2l5uTBjA">Curso Avanzado de React - 9. Escribiendo Pruebas</a>
    </ol>                    
    <ol>    
        <a href="https://www.youtube.com/watch?v=XaXFAVnb5ok">Curso Avanzado de React - 10. Probando las Funciones Reductoras</a>
    </ol>
    <ol>    
        <a href="https://www.youtube.com/watch?v=h7dFY-8XNxY">Curso Avanzado de React - 11. Probando los Action Creators</a>
    </ol>
</ul>

<h2>Acciones</h2>

```
npm init

npm install --save-dev yarn  #se instala yarn 0.27.5

npm yarn init 

yarn add webpack --dev

configuro webpack.config.js

yarn add babel-loader babel-core babel-preset-env --dev

# falta este paso: configurado babel-loader en webpack.config.js en config.module.rules[0].loader

yarn add react react-dom --dev

# https://github.com/facebookincubator/create-react-app/tree/master/packages/react-script
# react-scripts es un paquete de create-react-app intenta automatizar el arranque
# react-scripts obliga a tener la estructura que genera create-react-app
# yarn start arranca un servidor
# yarn test lanza los scripts en modo debug
# yarn run build genera scripts para produccion
yarn add react-scripts --dev

yarn add react

yarn add react-dom

#https://react-bootstrap.github.io/introduction.html
yarn add react-bootstrap #libreria para instalar componentes react para twitter bootstrap

yarn add redux

configuro package.json.scripts con los scripts de create-react-app

yarn start

```

```
Ejemplo repo original package.json
{
  "name": "redux-example",
  "version": "0.1.0",
  "private": true,
  "devDependencies": {
    "react-scripts": "0.8.5"
  },
  "dependencies": {
    "react": "^15.4.2",
    "react-bootstrap": "^0.30.7",
    "react-dom": "^15.4.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }
}
```