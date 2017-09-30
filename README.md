
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

npm install -g create-react-app

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
# configura webpackHotDevClient?
yarn add react-scripts --dev

yarn add react

yarn add react-dom

#https://react-bootstrap.github.io/introduction.html
yarn add react-bootstrap #libreria para instalar componentes react para twitter bootstrap

yarn add redux

configuro package.json.scripts con los scripts de create-react-app

yarn global add eslint --prefix /usr/local

# es un gestor de comunicaciones entre componentes a traves de props
# tiene un componente provider
yarn add react-redux --dev

#en caso de hacer el pull en otro servidor
yarn install --check-files

#hack para acciones, permite hacer un dispatch directamente de la accion haciendo que esta
#devuelva una funcion y no un texto
yarn add redux-thunk

#ejecuta llamadas asincronas
yarn add axios

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

```
////////////////////////////////////
//
//
//
////////////////////////////////////

load 2: actionCreators.js
actionCreators.js:7 ACTIONCREATORS.fnAxios:  ƒ wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  }
ProductList.js:9 load 3: ProductList.js
ShoppingCart.js:11 load 4: ShoppingCart.js
App.js:7 load 5: App.js
store.js:14 load 1: store.js
store.js:15 fnThunk ƒ (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return…
store.js:30 STORE.fnStoreCart.oAction.type @@redux/INIT
store.js:31 STORE.fnStoreCart.arState []
store.js:30 STORE.fnStoreCart.oAction.type @@redux/PROBE_UNKNOWN_ACTION_w.d.l.w.2.d
store.js:31 STORE.fnStoreCart.arState []
store.js:18 STORE.fnStoreProducts.oAction.type @@redux/INIT
store.js:19 STORE.fnStoreProducts.arState []
store.js:18 STORE.fnStoreProducts.oAction.type @@redux/PROBE_UNKNOWN_ACTION_t.r.z.x.6
store.js:19 STORE.fnStoreProducts.arState []
store.js:30 STORE.fnStoreCart.oAction.type @@redux/INIT
store.js:31 STORE.fnStoreCart.arState []
store.js:18 STORE.fnStoreProducts.oAction.type @@redux/INIT
store.js:19 STORE.fnStoreProducts.arState []
index.js:10 load 6: index.js
actionCreators.js:30 ACTIONCREATORS.fnAcLoadProducts
store.js:47 STORE.fnLogger dispatching oAction:  ƒ (fnDispatch) {
        return __WEBPACK_IMPORTED_MODULE_0_axios___default.a.get("http://json.theframework.es/index.php?getfile=demoproducts.json").then(function (oResponse) {
            console.log(…
store.js:49 STORE.fnLogger oStore.getstate() next state:  {arCart: Array(0), arProducts: Array(0)}
App.js:11 APP.App.render
ProductList.js:49 PRODUCTLIST.fnMapStateToProps return oStateNew con arProducts
ProductList.js:57 PRODUCTLIST.fnMapDispatchToProps devuelve oDispatch
ProductList.js:25 PRODUCTLIST.fnProductList.render()
ProductList.js:26 PRODUCTLIST.fnProductList: arProducts []
ProductList.js:27 PRODUCTLIST.fnProductList: fnAddToCart ƒ fnAddToCart(oProduct) {
            console.log("PRODUCTLIST.fnMapDispatchToProps.oDispatch.fnAddToCart");
            var oAction = Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["a" /* fnAcAd…
ShoppingCart.js:57 SHOPPINGCART.fnMapStateToProps return oStateNew con arCart
ShoppingCart.js:66 SHOPPINGCART.fnMapDispatchToProps return oDispatch
ShoppingCart.js:25 SHOPPINGCART.fnRenderShoppingCart
index.js:18 end index.js render
actionCreators.js:35 ACTIONCREATORS.fnAxios.then oResponse: {data: Array(3), status: 200, statusText: "OK", headers: {…}, config: {…}, …}
store.js:47 STORE.fnLogger dispatching oAction:  {type: "REPLACE_PRODUCTS", arProducts: Array(3)}
store.js:30 STORE.fnStoreCart.oAction.type REPLACE_PRODUCTS
store.js:31 STORE.fnStoreCart.arState []
store.js:18 STORE.fnStoreProducts.oAction.type REPLACE_PRODUCTS
store.js:19 STORE.fnStoreProducts.arState []
ProductList.js:49 PRODUCTLIST.fnMapStateToProps return oStateNew con arProducts
ProductList.js:25 PRODUCTLIST.fnProductList.render()
ProductList.js:26 PRODUCTLIST.fnProductList: arProducts (3) [{…}, {…}, {…}]0: {id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg"}1: {id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg"}2: {id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg"}length: 3__proto__: Array(0)
ProductList.js:27 PRODUCTLIST.fnProductList: fnAddToCart ƒ fnAddToCart(oProduct) {
            console.log("PRODUCTLIST.fnMapDispatchToProps.oDispatch.fnAddToCart");
            var oAction = Object(__WEBPACK_IMPORTED_MODULE_2__actionCreators__["a" /* fnAcAd…
ShoppingCart.js:57 SHOPPINGCART.fnMapStateToProps return oStateNew con arCart
store.js:49 STORE.fnLogger oStore.getstate() next state:  

////////////////////////////////////
//
//  NUEVO
//
////////////////////////////////////
PRODUCTLIST.fnMapDispatchToProps.oDispatch.fnAddToCart
actionCreators.js:11 ACTIONCREATORS.fnAcAddToCart return oAction+oProduct
store.js:47 STORE.fnLogger dispatching oAction:  {type: "ADD_TO_CART", product: {…}}
store.js:30 STORE.fnStoreCart.oAction.type ADD_TO_CART
store.js:31 STORE.fnStoreCart.arState []
store.js:18 STORE.fnStoreProducts.oAction.type ADD_TO_CART
store.js:19 STORE.fnStoreProducts.arState (3) [{…}, {…}, {…}]
ProductList.js:49 PRODUCTLIST.fnMapStateToProps return oStateNew con arProducts
ShoppingCart.js:57 SHOPPINGCART.fnMapStateToProps return oStateNew con arCart
store.js:49 STORE.fnLogger oStore.getstate() next state:  {arCart: Array(1), arProducts: Array(3)}
ShoppingCart.js:25 SHOPPINGCART.fnRenderShoppingCart

```

