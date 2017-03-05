/**
 * app\src\components\FilterableProductTable.js 1.0.1
 */
import Ract from "react"
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