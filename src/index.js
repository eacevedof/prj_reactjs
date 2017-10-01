import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//store tiene 3 metodos subscribe(fn),dispatch(oAction),getState(), el store es un observador??
import oStore from "./store";
import {Provider} from "react-redux"
import {fnAcLoadProducts} from "./actionCreators"

console.log("INDEX.Rreact: ",React)
console.log("INDEX.ReactDOM: ",ReactDOM)
console.log("INDEX.App: ",App)
console.log("INDEX.oStore: ",oStore)
console.log("INDEX.Provider: ",Provider)
console.log("INDEX.fnAcLoadProducts: ",fnAcLoadProducts)

const fnProdDispatch = fnAcLoadProducts()
//fnProdDispatch: fnDispatch => {..}
console.log("INDEX.fnProdDispatch: ",fnProdDispatch)
oStore.dispatch(fnProdDispatch)

ReactDOM.render(
    <Provider store={oStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);
console.log("end index.js render")