/**
 * app\src\components\FilterableProductTable.js 1.0.1
 * https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=809
 */
import React from "react"
import SearchBar from "./SearchBar.js"
import ProductTable from "./ProductTable.js"

export default class FilterableProductTable extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <SearchBar/>
                <ProductTable/>
            </div>
        )
    }

}//FilterableProductTable