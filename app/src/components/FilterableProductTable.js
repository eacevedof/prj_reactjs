/**
 * app\src\components\FilterableProductTable.js 1.2.0
 * https://youtu.be/1ymoW-mUPYQ?list=PLTUC0zY59vZHMLYBospfQoNrZO-vPvVub&t=809
 */
import React from "react"
import SearchBar from "./SearchBar.js"
import ProductTable from "./ProductTable.js"

export default class FilterableProductTable extends React.Component{
    constructor(){
        super()
        //por medio de esta llamada: <FilterableProductTable store={oDB}/> en index.js ya disponemos de la bd 
        //en este componente. Es curioso... cuando imprimo this se ve que tiene el atributo props pero si intento
        //referenciarlo me (this.props) me da undefined.
        console.log("FilterableProductTable.construct().this",this)
        this.state = {
            filter:null,
        }
    }

    filter_list(oEvent){
        let filter = oEvent.target.value
        this.setState({
            filter: filter
        })
    }

    render(){
        console.log("FilterableProductTable.redner",this.props.store)
        return(
            <div>
                <SearchBar onChange={this.filter_list.bind(this)}/>
                <ProductTable products={this.props.store} filter={this.state.filter}/>
            </div>
        )
    }

}//FilterableProductTable