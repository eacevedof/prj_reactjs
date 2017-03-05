/**
 * \app\src\components\ProductTable.js 1.0.0
 */
import Ract from "react"
import ProductCategoryRow from "./ProductCategoryRow.js"
import ProductRow from "./ProductRow.js"

export default class ProductTable extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div>
                <productcategoryrow/>
                <productrow/>
                <productrow/>
                <productrow/>
                <productcategoryrow/>
                <productrow/>
                <productrow/>
                <productrow/>                
            </div>
        )
    }

}//ProductTable