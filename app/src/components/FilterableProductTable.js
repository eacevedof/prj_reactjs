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

        //state se usa para datos cambiantes, state es una especie de array con constantes
        this.state = {
            filter:null,
        }
    }

    fn_onsearch(oEvent){
        console.log("filter_list.oEvent",oEvent)
        let sFilter = oEvent.target.value
        setTimeout(()=>{
            //setState actualiza el atributo dinamico
            this.setState({
                filter: sFilter
            })
        },100)
    }

    render(){
        console.log("FilterableProductTable.redner",this.props.store)
        return(
            <div>
                <SearchBar fnonsearch={this.fn_onsearch.bind(this)}/>
                <ProductTable products={this.props.store} filter={this.state.filter}/>
            </div>
        )
    }

}//FilterableProductTable