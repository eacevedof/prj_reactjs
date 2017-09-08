/**
 * \app\src\components\ProductCategoryRow.js 1.1.0
 */
import React from "react"

export default class ProductCategoryRow extends React.Component{
    constructor(){
        super()
        console.log("ProductCategoryRow.construct().this",this)
    }

    render(){
        return(
            <h4>{this.props.category}</h4>
        )
    }

}//ProductCategoryRow