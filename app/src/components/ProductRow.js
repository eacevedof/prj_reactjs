/**
 * \app\src\components\ProductRow.js 1.1.0
 */
import React from "react"

export default class ProductRow extends React.Component{
    constructor(){
        super()
        console.log("ProductRow.construct().this",this)
    }

    render(){
        return(
            <h6>{this.props.product}</h6>
        )
    }

}//ProductRow