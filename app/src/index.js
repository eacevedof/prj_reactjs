/**
 * \app\src\index.js 1.1.1
 * https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=918
 * fix: producttablerow
 * https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=1168
 */
import React from "react"
import ReactDOM from "react-dom"

import FilterableProductTable from "./components/FilterableProductTable.js"

let oDB = [
    //creo ids para resolver el error 
    {id:1, category:"Sporting goods", price:"$49.99",stocked:true, name:"Football"},
    {id:2, category:"Sporting goods", price:"$9.99",stocked:true, name:"Baseball"},
    {id:3, category:"Sporting goods", price:"29.99",stocked:false, name:"Basketball"},
    {id:4, category:"Electronics", price:"$99.99",stocked:true, name:"iPod Touch"},
    {id:5, category:"Electronics", price:"$399.99",stocked:false, name:"iPhone 5"},
    {id:6, category:"Electronics", price:"$199.99",stocked:true, name:"Nexus 7"},
]

const eDiv = document.getElementById("divApp")
//pasamos la bd al componente
ReactDOM.render(<FilterableProductTable store={oDB}/>,eDiv)



