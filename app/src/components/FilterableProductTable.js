/**
 * app\src\components\FilterableProductTable.js 1.1.0
 * https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=809
 */
import React from "react"
import SearchBar from "./SearchBar.js"
import ProductTable from "./ProductTable.js"

export default class FilterableProductTable extends React.Component{
    constructor(){
        super()
        //por medio de esta llamada: <FilterableProductTable store={oDB}/> en index.js ya disponemos de la bd 
        //en este componente
    }

    render(){
        return(
            <div>
                <SearchBar/>
                <ProductTable products={/*acaba de hererdar la bd*/this.props.store}/>
            </div>
        )
    }

}//FilterableProductTable