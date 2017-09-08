/**
 * \app\src\index.js 1.2.0
 * https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=918
 * fix: producttablerow
 * https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=1168
 */
import React from "react"
import ReactDOM from "react-dom"
import {Router, Route, IndexRouter, hashHistory} from "react-router"

//aqui quito la importación de FilterableProductTable pq la haré dentro de Store.js
import Home from "./routes/Home.js"
import Store from "./routes/Store.js"

const eDivApp = document.getElementById("divApp")
//pasamos la bd al componente
ReactDOM.render(
    <Router history={hashHistory}>
        <Route path="/" component={Home} />
        <Route path="store" component={Store}></Route>
    </Router>
    ,eDivApp)
