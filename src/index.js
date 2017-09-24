import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
//store tiene 3 metodos subscribe(fn),dispatch(oAction),getState(), el store es un observador??
import oStore from "./store";
import {Provider} from "react-redux"
import {fnAcLoadProducts} from "./actionCreators"

console.log("load 6: index.js")
oStore.dispatch(fnAcLoadProducts())
ReactDOM.render(
    <Provider store={oStore}>
        <App />
    </Provider>,
    document.getElementById("root")
);
console.log("end index.js render")