/**
 * \app\src\index.js 1.1.0
 * https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=918
 * fix: producttablerow
 * https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=1168
 */
import React from "react"
import ReactDOM from "react-dom"

import FilterableProductTable from "./components/FilterableProductTable.js"

let oDB = [
    {category:"Sporting goods", price:"$49.99",stocked:true, name:"Football"},
    {category:"Sporting goods", price:"$9.99",stocked:true, name:"Baseball"},
    {category:"Sporting goods", price:"29.99",stocked:false, name:"Basketball"},
    {category:"Electronics", price:"$99.99",stocked:true, name:"iPod Touch"},
    {category:"Electronics", price:"$399.99",stocked:false, name:"iPhone 5"},
    {category:"Electronics", price:"$199.99",stocked:true, name:"Nexus 7"},
]

const eDiv = document.getElementById("divApp")
//pasamos la bd al componente
ReactDOM.render(<FilterableProductTable store={oDB}/>,eDiv)



